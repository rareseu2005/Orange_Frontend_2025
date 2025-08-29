# Git Initial Configuration

## Pașii de configurare inițială în Git

### 1. Deschide Git Bash

Aceasta este interfața de linie de comandă pentru Git.

### 2. Setează numele utilizatorului

``` bash
git config --global user.name "Andrei Popescu"
```

**Explicație:** Această comandă setează numele utilizatorului care va
apărea în istoricul commit-urilor. Opțiunea `--global` înseamnă că se
aplică pentru toate proiectele de pe calculatorul tău.

### 3. Setează adresa de email

``` bash
git config --global user.email "andrei.popescu@gmail.com"
```

**Explicație:** Această comandă setează adresa de email asociată
commit-urilor. Și aceasta se aplică global pentru toate proiectele.

### 4. Verifică configurația actuală

``` bash
git config --global --list
```

**Explicație:** Afișează toate setările globale curente (nume, email și
alte configurări Git).

------------------------------------------------------------------------

# Basic Git Bash (Linux)

### Deschide terminalul Git Bash

Git Bash este un emulator de terminal care îți permite să folosești
comenzi Git și comenzi de tip Linux.

Exemple de comenzi Linux uzuale (folosite în Git Bash):

### 1. Listarea fișierelor și directoarelor

``` bash
ls
```

**Explicație:** Afișează lista fișierelor și directoarelor din folderul
curent.

### 2. Schimbarea directorului curent

``` bash
cd nume_director
```

**Explicație:** Schimbă directorul curent în `nume_director`.

### 3. Crearea unui director nou

``` bash
mkdir proiect
```

**Explicație:** Creează un director nou numit `proiect`.

### 4. Verificarea locației curente

``` bash
pwd
```

**Explicație:** Afișează calea completă către directorul în care te
afli.

### 5. Curățarea terminalului

``` bash
clear
```

**Explicație:** Șterge tot conținutul afișat în terminal și lasă o
fereastră curată pentru comenzile următoare.
