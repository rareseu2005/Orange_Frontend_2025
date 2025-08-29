# Top 30 comenzi esențiale Git (cu explicații și exemple)

> Toate comenzile sunt în blocuri `bash` ca să le poți **copia** ușor. Explicațiile sunt scurte și practice.

---

## 1) Inițializează un repo nou
```bash
git init
```
**Ce face:** Creează un depozit Git în folderul curent (scrie metadatele în `.git`).  
**Exemplu:**
```bash
mkdir proiect && cd proiect
git init
```

---

## 2) Clonează un repo existent
```bash
git clone <URL>
```
**Ce face:** Descarcă un depozit existent (inclusiv istoricul) într-un folder local.  
**Exemplu:**
```bash
git clone https://github.com/user/proiect.git
```

---

## 3) Setează numele autorului (global)
```bash
git config --global user.name "Numele Tău"
```
**Ce face:** Setează numele care apare la commit-uri pentru toate repo-urile de pe PC.  
**Exemplu:**
```bash
git config --global user.name "Andrei Popescu"
```

---

## 4) Setează emailul autorului (global)
```bash
git config --global user.email "email@exemplu.com"
```
**Ce face:** Setează emailul care apare la commit-uri pentru toate repo-urile de pe PC.  
**Exemplu:**
```bash
git config --global user.email "andrei.popescu@gmail.com"
```

---

## 5) Vezi starea repo-ului
```bash
git status
```
**Ce face:** Afișează fișiere modificate, adăugate, neversionate și branch-ul curent.  
**Exemplu:**
```bash
git status
```

---

## 6) Adaugă fișiere în zona de staging
```bash
git add <fișier|director|.>
```
**Ce face:** Marchează modificările pentru următorul commit.  
**Exemplu:**
```bash
git add .
```

---

## 7) Scoate fișierul din staging (anulează `git add` pentru un fișier)
```bash
git restore --staged <fișier>
```
**Ce face:** Mută modificările unui fișier înapoi din staging în workdir.  
**Exemplu:**
```bash
git restore --staged README.md
```

---

## 8) Elimină un fișier din repo păstrându-l pe disc
```bash
git rm --cached <fișier>
```
**Ce face:** Îl scoate din controlul versiunilor, dar nu îl șterge din sistemul de fișiere.  
**Exemplu:**
```bash
git rm --cached .env
```

---

## 9) Mută sau redenumește fișiere
```bash
git mv <sursa> <destinatie>
```
**Ce face:** Redenumește/mută un fișier urmărind schimbarea în Git.  
**Exemplu:**
```bash
git mv vechi.txt nou.txt
```

---

## 10) Creează un commit
```bash
git commit -m "Mesaj descriptiv"
```
**Ce face:** Salvează în istoric modificările aflate în staging.  
**Exemplu:**
```bash
git commit -m "Adaugă formulare de autentificare"
```

---

## 11) Modifică ultimul commit (fără a schimba mesajul)
```bash
git commit --amend --no-edit
```
**Ce face:** Adaugă modificările curente la ultimul commit (atenție la repo-uri partajate).  
**Exemplu:**
```bash
git add fix.js
git commit --amend --no-edit
```

---

## 12) Istoricul pe scurt, cu grafic de branch-uri
```bash
git log --oneline --graph --decorate --all
```
**Ce face:** Afișează istoricul compact cu ramurile și referințele.  
**Exemplu:**
```bash
git log --oneline --graph --decorate --all
```

---

## 13) Vezi diferențele dintre fișiere
```bash
git diff
```
**Ce face:** Afișează modificările ne-stagiate față de ultima versiune.  
**Exemplu:**
```bash
git diff
```

---

## 14) Arată detalii despre un commit/obiect
```bash
git show <hash|tag|branch>
```
**Ce face:** Afișează conținutul și mesajul unui commit (sau diff-ul unui tag).  
**Exemplu:**
```bash
git show HEAD~1
```

---

## 15) Lucrează cu branch-uri (listează/creează/șterge)
```bash
git branch
```
**Ce face:** Fără argumente listează branch-urile; cu `-d` șterge; cu nume creează.  
**Exemplu:**
```bash
git branch feature/login
```

---

## 16) Creează și comută pe un branch nou (recomandat)
```bash
git switch -c <nume-branch>
```
**Ce face:** Creează și trece pe un branch nou într-un singur pas.  
**Exemplu:**
```bash
git switch -c feature/ui-redesign
```

---

## 17) Comută între branch-uri existente
```bash
git switch <nume-branch>
```
**Ce face:** Treci pe un branch existent.  
**Exemplu:**
```bash
git switch main
```

---

## 18) Fuzionează un branch în altul
```bash
git merge <branch-sursa>
```
**Ce face:** Îmbină istoricul `branch-sursa` în branch-ul curent (creează un commit de merge dacă e nevoie).  
**Exemplu:**
```bash
git switch main
git merge feature/ui-redesign
```

---

## 19) Rebase (rearanjează commit-uri peste altă bază)
```bash
git rebase <branch-baza>
```
**Ce face:** Mută commit-urile tale pentru a avea un istoric mai liniar.  
**Exemplu:**
```bash
git switch feature/ui-redesign
git rebase main
```

---

## 20) Salvează temporar modificările (stash)
```bash
git stash push -m "mesaj-opțional"
```
**Ce face:** Pune deoparte modificările locale pentru a reveni la un workdir curat.  
**Exemplu:**
```bash
git stash push -m "WIP: form validări"
```

---

## 21) Listează stările salvate (stash-uri)
```bash
git stash list
```
**Ce face:** Afișează toate stash-urile create.  
**Exemplu:**
```bash
git stash list
```

---

## 22) Aplică și elimină ultimul stash
```bash
git stash pop
```
**Ce face:** Aplică modificările din ultimul stash și îl șterge din listă.  
**Exemplu:**
```bash
git stash pop
```

---

## 23) Creează un tag adnotat (versiune)
```bash
git tag -a v1.0.0 -m "Prima versiune stabilă"
```
**Ce face:** Marchează un punct important în istoric (util pentru release-uri).  
**Exemplu:**
```bash
git tag -a v1.0.0 -m "Prima versiune stabilă"
```

---

## 24) Listează tag-urile
```bash
git tag
```
**Ce face:** Afișează toate etichetele (tag-urile) din repo.  
**Exemplu:**
```bash
git tag
```

---

## 25) Vezi și gestionează remote-urile
```bash
git remote -v
```
**Ce face:** Afișează URL-urile pentru origin/alte remote-uri (fetch/push).  
**Exemplu:**
```bash
git remote -v
```

---

## 26) Adaugă un remote „origin”
```bash
git remote add origin <URL>
```
**Ce face:** Leagă repo-ul local de un server (GitHub/GitLab/Bitbucket).  
**Exemplu:**
```bash
git remote add origin https://github.com/user/proiect.git
```

---

## 27) Trimite commit-urile pe remote (și setează tracking)
```bash
git push -u origin <branch>
```
**Ce face:** Urcă branch-ul pe server și setează upstream pentru comenzi viitoare.  
**Exemplu:**
```bash
git push -u origin main
```

---

## 28) Aduce și îmbină ultimele schimbări de pe remote
```bash
git pull
```
**Ce face:** Echivalent cu `git fetch` + `git merge` pentru branch-ul urmărit.  
**Exemplu:**
```bash
git pull
```

---

## 29) Aduce schimbările fără a le îmbina
```bash
git fetch --prune
```
**Ce face:** Actualizează referințele locale la remote și curăță branch-urile șterse pe server.  
**Exemplu:**
```bash
git fetch --prune
```

---

## 30) Rescrie starea locală la un commit anterior (periculos)
```bash
git reset --hard <commit>
```
**Ce face:** Resetează indexul și workdir-ul la `<commit>`. **Șterge** modificările locale!  
**Exemplu:**
```bash
git reset --hard HEAD~1
```

---

### Notă utilă
- Pentru a reveni dintr-un `reset --hard` ai nevoie, de regulă, de referințe ca `reflog`, dar **nu te baza** pe asta în workflow-ul zilnic.
- În proiecte colaborative, evită `--force`/`--hard` pe branch-uri partajate.

