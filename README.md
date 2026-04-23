# IoT Sensor - ESP32 + DHT11 + API Backend

## Overview

Este projeto consiste em um sistema de coleta de dados ambientais utilizando um ESP32 com sensor DHT11, enviando dados de temperatura e umidade para uma API backend hospedada no Render.

O objetivo é construir uma base escalável para coleta, armazenamento e análise de dados IoT, com possibilidade de expansão para dashboards, alertas e aplicações analíticas.

---

## Arquitetura

O sistema segue o modelo cliente-servidor:

ESP32 → HTTP → API (Node.js) → (futuro: banco de dados)

---

## Tecnologias utilizadas

- ESP32 (microcontrolador)
- Sensor DHT11
- Arduino Framework
- Node.js
- Express
- Render (deploy cloud)

---

## Estrutura do projeto

### Firmware (ESP32)

Responsável por:
- Conectar ao WiFi
- Ler dados do sensor DHT11
- Enviar dados via HTTP para a API

### Backend (Node.js)

Responsável por:
- Receber dados via endpoint `/sensor`
- Processar requisições
- (futuro) Persistir dados em banco
- (futuro) Expor dados via endpoints

---

## Configuração do ESP32

### Dependências

- WiFi.h
- HTTPClient.h
- DHT.h

### Configuração

```cpp
#define WIFI_SSID "SEU_WIFI"
#define WIFI_PASS "SUA_SENHA"

String serverName = "http://api-sensor-3nof.onrender.com/sensor";
```


---


```text
+-------------+        +------------------+        +------------------+
|   ESP32     | -----> |   API Backend    | -----> |   Data Storage    |
| (DHT11)     | HTTP   | (Node.js)        |        | (Future: DB)      |
+-------------+        +------------------+        +------------------+
```

### Fluxo de dados

1. ESP32 lê sensor DHT11
2. Dados são enviados via HTTP GET
3. API recebe e valida
4. Dados são armazenados (futuro)
5. Dados ficam disponíveis para consulta
   
