# Programmeren Opdracht Week 5 - data & kaggle
2022-03-19
Lucas van der Vegt

Deadline: 2022-03-20

https://classroom.github.com/assignment-invitations/f0fe4bb833db2e3c918828264d61453b/status

https://github.com/HR-CMGT-Classroom/prg08-2022-week5-LuukFTF

https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/week5/inleveropdracht.md


## Uitleg
    Bij de inleveropdracht van week 5 ga je een echte dataset gebruiken, én testen hoe accuraat je voorspellingen zijn.

## Requirements

Project
    - [x] een van de drie datasets ingeladen (diabetes, mushrooms, titanic)
    - [x] dataset als decision tree
    - [x] accuracy uitgerekend
    - [x] extra uitdaging gekozen en geprobeerd uit te werken
Inleverdocument
    - [x] welke data?
    - [x] wat is de accuracy? 
    - [x] hoe zou de accuracy beter kunnen?
    - [x] hoe ver gekomen met de extra uitdaging?
Reflectiedocument
    - [x] Wat is het doel van je experiment?
    - [x] Wat is de data (input), en wat wordt er voorspeld (output)?
    - [x] Welk algoritme of library wordt gebruikt?
    - [x] Is het doel behaald? Kan je de opgedane kennis gebruiken voor het eindproject?
    - [x] Wat vond jij makkelijk of moeilijk aan het programmeren?


## Planning

- [x] Kies dataset
- [x] Bekijken en analyseren dataset
- [x] init repo & project
- [x] data inladen
- [x] trainingdata en testdata (apart) inladen
- [x] decision tree genereren en tekenen
- [x] prediction
- [x] accuracy
- [x] extra uitdaging 1, 2 of 3
    - [-] Data van Kaggle gebruiken
    - [-] Model opslaan als JSON
    - [x] Confusion Matrix tekenen

- [x] inlever todos:
  - [x] inleverdocument
  - [x] screen recording 
  - [x] reflectiedocument
  - [x] last check
  - [o] inleveren

## Resources

https://www.kaggle.com/datasets
https://github.com/lagodiuk/decision-tree-js
https://winkjs.org/wink-regression-tree/
https://vega.github.io/vega/examples/tree-layout/
https://www.papaparse.com/
https://towardsdatascience.com/decision-trees-in-machine-learning-641b9c4e8052

## Datasets

[Poisonous mushrooms dataset](https://www.kaggle.com/uciml/mushroom-classification)

[Diabetes dataset](https://www.kaggle.com/uciml/pima-indians-diabetes-database)

[Titanic dataset](https://www.kaggle.com/c/titanic)

## Ideeën
Poisonous mushrooms dataset

## Notes

https://www.kaggle.com/nirajvermafcb/comparing-various-ml-models-roc-curve-comparison
https://www.kaggle.com/uciml/mushroom-classification/discussion/198420
https://www.youtube.com/watch?v=7E7tl6rm7VM
https://archive.ics.uci.edu/ml/datasets/Mushroom
https://vega.github.io/

## Dataset
Poisonous mushrooms dataset
https://www.kaggle.com/uciml/mushroom-classification

1987-04-27
Original lables: edible, poisonous & unknown (last one combined in poisonous)

Lables: edible=e & poisonous=p (2)

**22 Attributes**
**8124 Entries**

Attributes:
1. cap-shape:                   bell=b,conical=c,convex=x,flat=f, knobbed=k,sunken=s (6)
2. cap-surface:                 fibrous=f,grooves=g,scaly=y,smooth=s (4)
3. cap-color:                   brown=n,buff=b,cinnamon=c,gray=g,green=r,pink=p,purple=u,red=e,white=w,yellow=y (10)
4. bruises:                     bruises=t,no=f (2)
5. odor:                        almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s (9)
6. gill-attachment:             attached=a,descending=d,free=f,notched=n (4)
7. gill-spacing:                close=c,crowded=w,distant=d (3)
8. gill-size:                   broad=b,narrow=n (2)
9. gill-color:                  black=k,brown=n,buff=b,chocolate=h,gray=g,green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y (11)
10. stalk-shape:                enlarging=e,tapering=t (2)
11. stalk-root:                 bulbous=b,club=c,cup=u,equal=e,rhizomorphs=z,rooted=r,missing=? (7)
12. stalk-surface-above-ring:   fibrous=f,scaly=y,silky=k,smooth=s (4)
13. stalk-surface-below-ring:   fibrous=f,scaly=y,silky=k,smooth=s (4)
14. stalk-color-above-ring:     brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y (9)
15. stalk-color-below-ring:     brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y (9)
16. veil-type:                  partial=p,universal=u (2)
17. veil-color:                 brown=n,orange=o,white=w,yellow=y (4)
18. ring-number:                none=n,one=o,two=t (3)
19. ring-type:                  cobwebby=c,evanescent=e,flaring=f,large=l,none=n,pendant=p,sheathing=s,zone=z (8)
20. spore-print-color:          black=k,brown=n,buff=b,chocolate=h,green=r,orange=o,purple=u,white=w,yellow=y (9)
21. population:                 abundant=a,clustered=c,numerous=n,scattered=s,several=v,solitary=y (6)
22. habitat:                    grasses=g,leaves=l,meadows=m,paths=p,urban=u,waste=w,woods=d (7)

## Inleverdocument

**Welke data?**  
Ik heb de [poisonous mushroom dataset](https://www.kaggle.com/uciml/mushroom-classification/discussion/198420) gebruikt van kaggle. 

De dataset komt uit 1987 en was onderdeel van een van de eerste machine learning onderzoeken.

De dataset is opgedeeld in 3 originele labels: `edible`, `poisonous` & `unknown`. `unknown` is samengevoegd met poisonous. Wat uiteindelijk 2 labels overhoud: `edible` (e) & `poisonous`(p)

Er zijn **8124 entries** in deze det en heeft per entry **22 attributes**.

```md
Attributes:
1. cap-shape:                   bell=b,conical=c,convex=x,flat=f, knobbed=k,sunken=s (6)
2. cap-surface:                 fibrous=f,grooves=g,scaly=y,smooth=s (4)
3. cap-color:                   brown=n,buff=b,cinnamon=c,gray=g,green=r,pink=p,purple=u,red=e,white=w,yellow=y (10)
4. bruises:                     bruises=t,no=f (2)
5. odor:                        almond=a,anise=l,creosote=c,fishy=y,foul=f,musty=m,none=n,pungent=p,spicy=s (9)
6. gill-attachment:             attached=a,descending=d,free=f,notched=n (4)
7. gill-spacing:                close=c,crowded=w,distant=d (3)
8. gill-size:                   broad=b,narrow=n (2)
9. gill-color:                  black=k,brown=n,buff=b,chocolate=h,gray=g,green=r,orange=o,pink=p,purple=u,red=e,white=w,yellow=y (11)
10. stalk-shape:                enlarging=e,tapering=t (2)
11. stalk-root:                 bulbous=b,club=c,cup=u,equal=e,rhizomorphs=z,rooted=r,missing=? (7)
12. stalk-surface-above-ring:   fibrous=f,scaly=y,silky=k,smooth=s (4)
13. stalk-surface-below-ring:   fibrous=f,scaly=y,silky=k,smooth=s (4)
14. stalk-color-above-ring:     brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y (9)
15. stalk-color-below-ring:     brown=n,buff=b,cinnamon=c,gray=g,orange=o,pink=p,red=e,white=w,yellow=y (9)
16. veil-type:                  partial=p,universal=u (2)
17. veil-color:                 brown=n,orange=o,white=w,yellow=y (4)
18. ring-number:                none=n,one=o,two=t (3)
19. ring-type:                  cobwebby=c,evanescent=e,flaring=f,large=l,none=n,pendant=p,sheathing=s,zone=z (8)
20. spore-print-color:          black=k,brown=n,buff=b,chocolate=h,green=r,orange=o,purple=u,white=w,yellow=y (9)
21. population:                 abundant=a,clustered=c,numerous=n,scattered=s,several=v,solitary=y (6)
22. habitat:                    grasses=g,leaves=l,meadows=m,paths=p,urban=u,waste=w,woods=d (7)
```

**Wat is de accuracy?**      
Omdat de dataset eerst word gehusseld is bij elke refresh de uitkomst anders. 
De accuracy schommelt tussen de 99% en 100%.

Hoe zou de accuracy beter kunnen?
De accuracy zou beter worden als je meer trainingsdata hebt of je zou kunnen spelen met de trainingsdepth. Maar uit mijn uitkomsten is dat nieteens nodig omdat vrijwel elke keer het een hogere accuracy heeft dan 99.8%.

**Hoe ver gekomen met de extra uitdaging?**  
Ik heb de confusion matrix uitgekozen, in de javascript worden de 4 gegevens berekent en vervolgens in de html met DOM getoond.

## Screen Recording Demo

https://youtu.be/G1enOuou4Ss

## Reflectie Document

**Wat is het doel van je experiment?**  
Leren hoe je moet werken met grote hoeveelheid data in javascript. Leren hoe je een decision tree genereert. Leren hoe je deze informatie kan visualiseren en relevante statistieken kan halen uit de analyse. 

**Wat is de data (input), en wat wordt er voorspeld (output)?**  
Mijn input waren 8124 rijen van 22 kolommen en er werd voorspeld of de paddenstoel eetbaar of giftig is.

**Welk algoritme of library wordt gebruikt?**  
Ik heb gebruik gemaakt van de volgende algoritmes en libraries:
- PapaParse (https://www.papaparse.com/0)
- Vega Tree (https://vega.github.io/vega/)
- DecisionTree (https://github.com/lagodiuk/decision-tree-js)

**Is het doel behaald? Kan je de opgedane kennis gebruiken voor het eindproject?**  
Ja ik kan de kennis die heb opgedaan over het omgaan met data, de decision tree en het visualiseren voor mijn eindopdracht gebruiken.

**Wat vond jij makkelijk of moeilijk aan het programmeren?**  
Ik heb deze opdracht binnen 1.5 week kunnen afmaken, de uitdaging was niet te moeilijk en ook niet te makkelijk: het was perfect. Er was genoeg uitdaging om het interresant te maken, de enige keer dat ik tegen iets aan liep heb ik het gevraagd aan een van de docenten (Erik) en kon ik daarna vlekkeloos verder. Ik vond het een leuke en interresante opdracht!