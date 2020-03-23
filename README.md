# 8BIT JOURNEY

## PRAVIDLA:
- První se vždy pohne hráč, až poté nepřítel.
- Hráč se může bohybovat do všech čtyř směrů (doprava, doleva, dolů, nahoru).
- Pokud se hráč nacházi asi v polovině obrazovky a pohne se nahoru, pohne se s ním i vše ostatní. Hra je procedurálně generovaná.
- Herní pole je čtvercový grid o jedenácti sloupcích, začínající ze shora (dole nemusí končit přesně).
- Cílem je získat co nejvyšší skóre.
- Skóre je určeno podle počtu řádků, kolik jsme přešli (každý řádek je připočten pouze jednou).
- Cestou nahoru se hráč bude setkévat s nepřáteli. Ti budou mít odlišný způsob pohybu. pokud se hráč dostane příliš blížko (na vzdálenost 1 pole) nepřítel se pohne k hráči, potažmo zaůtočí
- Útok nastane ve chvíli, kdy se hráč (nebo nepřítel) chce pohnout směrem ve kterém je nepřítel (hráč). První útočí hráč (= pokud nepřítele zabije na jednu ránu, nepřítel mu neubere životy).
- Každý nepřítel má daný počet životů. Ty se odvyjí od druhu nepřítele a jejich levelu.
- Level nepřátel se bude postupně zvyšovat (podle řádku na kterém se poprvé objeví).

### SOUBOJ
- Začíná ve chvíli, když jste 

### BĚHEM HRY MŮŽETE JE MOŽNO VIDĚT
- HUD
    - menu
        - home buton (esc)
        - skill/equipment
        - inventář
        - nastavení
    - životy hráče
    - životy cíle (nepřítel, krabice, krystal)
    - mana
    - level/xp-bar
- prostor
    - překážky
        - plot (dveře)
        - kámen (v dungeonu)
        - další (stromy, prázdné bedny...)
    - bonusy
        - bedny
        - krabice
        - krystaly
        - peníze
    - enemy
        - slime
        - kostlivec
        - netopír
        - ...
    - npc
        - merchant
        - kovář
    - hráč