perguntas = [
    {
        'Pergunta': 'Quanto é 2+2?',
        'Opções': ["1", "3", "4", "5"],
        'Resposta': '4',
    },
    {
        'Pergunta': 'Quanto é 5*5?',
        'Opções': ['25', '55', '10', '51'],
        'Resposta': '25',
    },
    {
        'Pergunta': 'Quanto é 10/2?',
        'Opções': ['4', '5', '2', '1'],
        'Resposta': '5',
    },
]

cont = 0
while cont >= 3:
    
    for k, v in enumerate(perguntas[0]["Opções"]):
        print(f"{k}) {v}")
        cont += 1

    o = input("Escolha uma opção: ")
    if o == 2:
        print("ACERTOU")
    
    print("-" * 30)

    for k, v in enumerate(perguntas[1]["Opções"]):
        print(F"{k}) {v}")
        cont += 1

    print("-" * 30)

    for k, v in enumerate(perguntas[2]["Opções"]):
        print(f"{k}) {v}")
        cont += 1