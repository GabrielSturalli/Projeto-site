# -*- coding: utf-8 -*-
"""
Atualiza o arquivo curva-juros.js com a curva de juros DI x Pré (ETTJ)
mais recente disponível.

Fonte dos dados: biblioteca pyettj, que busca o arquivo público "TaxaSwap"
direto da B3 (sem necessidade de cadastro, login ou chave de API).

Por que ".js" e não ".json": o gráfico do site carrega esse arquivo com uma
tag <script src="...">, não com fetch(). Isso é proposital — fetch() de um
arquivo local é bloqueado pelo navegador quando você abre o index.html
direto (dando duplo clique), sem passar por um servidor. Uma tag <script>
carrega arquivos locais normalmente nesse caso.

COMO USAR:
  1) Instale a biblioteca (uma vez só):
       pip install pyettj

  2) Rode este script sempre que quiser atualizar a curva:
       python atualizar_curva_juros.py

  3) Ele cria/atualiza o arquivo curva-juros.js na mesma pasta.
     Copie esse arquivo para dentro da pasta do seu site
     (C:\\Users\\User\\Desktop\\Projeto site), no mesmo nível do index.html.

  4) (Opcional) Para automatizar, agende esse script no Agendador de Tarefas
     do Windows para rodar 1x por semana, por exemplo.
"""

import json
from datetime import date, timedelta

import pyettj as ettj

CAMINHO_SAIDA = "curva-juros.js"


def buscar_curva_mais_recente(tentativas=7):
    """Tenta buscar a curva DI x Pré do dia mais recente disponível.
    Se cair em fim de semana, feriado ou dia sem dados publicados,
    volta um dia e tenta de novo, até `tentativas` vezes."""
    hoje = date.today()
    ultimo_erro = None

    for i in range(tentativas):
        dia = hoje - timedelta(days=i)
        data_str = dia.strftime("%d/%m/%Y")
        try:
            df = ettj.get_ettj(data_str, curva="PRE")
            return df, data_str
        except Exception as e:
            print(f"Sem dados para {data_str} ({e}). Tentando o dia anterior...")
            ultimo_erro = e

    raise RuntimeError(
        f"Não consegui encontrar dados nos últimos {tentativas} dias. "
        f"Último erro: {ultimo_erro}"
    )


def main():
    df, data_ref = buscar_curva_mais_recente()

    pontos = []
    for _, row in df.iterrows():
        pontos.append({
            "dias_uteis": int(row["dias_uteis"]),
            "prazo_anos": round(row["dias_uteis"] / 252, 3),
            "taxa": round(row["taxa"] * 100, 3),  # decimal (0.1465) -> percentual (14.65)
        })

    # Garante que os pontos fiquem em ordem de prazo (curto -> longo)
    pontos.sort(key=lambda p: p["dias_uteis"])

    saida = {
        "data_referencia": data_ref,
        "curva": "DI x Pré (PRE)",
        "fonte": "B3 - arquivo TaxaSwap",
        "pontos": pontos,
    }

    with open(CAMINHO_SAIDA, "w", encoding="utf-8") as f:
        f.write("window.__CURVA_JUROS__ = ")
        json.dump(saida, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Curva atualizada: {len(pontos)} pontos, referente a {data_ref}.")
    print(f"Arquivo salvo em: {CAMINHO_SAIDA}")
    print("Copie esse arquivo para a pasta do seu site para atualizar o gráfico.")


if __name__ == "__main__":
    main()
