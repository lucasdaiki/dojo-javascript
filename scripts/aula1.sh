echo 'Preparando seu ambiente'

cd $(git rev-parse --show-toplevel)/aulas/aula1/
mkdir javascripting
cd javascripting
echo 'Pastas criadas'

echo 'Instalando dependencias'
npm i -g javascripting

echo 'Seu ambiente está pronto. Bora estudar!'