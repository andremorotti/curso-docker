from fastapi import FastAPI
from typing import List
import json
import os

app = FastAPI()

# Função para carregar os dados do JSON
def load_cards():
    file_path = os.path.join(os.path.dirname(__file__), "cards.json")
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)

# Endpoint para obter todas as cartas
@app.get("/api01/cards")
def get_cards():
    return load_cards()


