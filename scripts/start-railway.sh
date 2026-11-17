#!/bin/sh
# Inicialização no Railway: cria/atualiza as tabelas (com novas tentativas
# enquanto a rede interna até o MySQL sobe), cria o admin e liga o servidor.
cd /app 2>/dev/null || true

PRISMA="node node_modules/prisma/build/index.js"

ok=0
i=1
while [ $i -le 15 ]; do
  echo "[start] Criando/atualizando tabelas do banco (tentativa $i/15)..."
  if $PRISMA db push --skip-generate; then
    ok=1
    echo "[start] Banco de dados pronto."
    break
  fi
  echo "[start] Banco ainda indisponível, nova tentativa em 4s..."
  i=$((i + 1))
  sleep 4
done

if [ "$ok" != "1" ]; then
  echo "[start] ERRO: não foi possível criar as tabelas do banco. Verifique DATABASE_URL."
fi

if [ "$ok" = "1" ] && [ -n "$ADMIN_EMAIL" ] && [ -n "$ADMIN_PASSWORD" ]; then
  echo "[start] Criando/atualizando usuário administrador..."
  node scripts/setup-admin.js "$ADMIN_EMAIL" "$ADMIN_PASSWORD" || echo "[start] Falha ao criar o administrador."
fi

export NODE_ENV=production
exec node node_modules/tsx/dist/cli.mjs src/server/index.ts
