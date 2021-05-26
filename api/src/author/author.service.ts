import { Injectable } from '@nestjs/common';
import { Author } from 'src/model/model';

@Injectable()
export class AuthorService {

  private readonly data: Author[] = [
    {
      "id": 1,
      "lastName": "Fiedler",
      "firstName": "Heinz-Georg",
      "email": "heinz-georg.fiedler@example.com"
    },
    {
      "id": 2,
      "lastName": "Hughes",
      "firstName": "Katie",
      "email": "katie.hughes@example.com"
    },
    {
      "id": 3,
      "lastName": "Aasland",
      "firstName": "Vetle",
      "email": "vetle.aasland@example.com"
    },
    {
      "id": 4,
      "lastName": "Vasquez",
      "firstName": "Dylan",
      "email": "dylan.vasquez@example.com"
    },
    {
      "id": 5,
      "lastName": "Vicente",
      "firstName": "Margarita",
      "email": "margarita.vicente@example.com"
    },
    {
      "id": 6,
      "lastName": "Oliver",
      "firstName": "Joey",
      "email": "joey.oliver@example.com"
    },
    {
      "id": 7,
      "lastName": "Lampinen",
      "firstName": "Lilja",
      "email": "lilja.lampinen@example.com"
    },
    {
      "id": 8,
      "lastName": "Liu",
      "firstName": "Abigail",
      "email": "abigail.liu@example.com"
    },
    {
      "id": 9,
      "lastName": "Pilz",
      "firstName": "Melanie",
      "email": "melanie.pilz@example.com"
    },
    {
      "id": 10,
      "lastName": "Carlson",
      "firstName": "Evan",
      "email": "evan.carlson@example.com"
    },
    {
      "id": 11,
      "lastName": "Steward",
      "firstName": "Kitty",
      "email": "kitty.steward@example.com"
    },
    {
      "id": 12,
      "lastName": "Ramos",
      "firstName": "Vanessa",
      "email": "vanessa.ramos@example.com"
    },
    {
      "id": 13,
      "lastName": "Gomes",
      "firstName": "Olaí",
      "email": "olai.gomes@example.com"
    },
    {
      "id": 14,
      "lastName": "Bourgeois",
      "firstName": "Constance",
      "email": "constance.bourgeois@example.com"
    },
    {
      "id": 15,
      "lastName": "Carter",
      "firstName": "Kenneth",
      "email": "kenneth.carter@example.com"
    },
    {
      "id": 16,
      "lastName": "Myran",
      "firstName": "Sigmund",
      "email": "sigmund.myran@example.com"
    },
    {
      "id": 17,
      "lastName": "Calvo",
      "firstName": "Josefina",
      "email": "josefina.calvo@example.com"
    },
    {
      "id": 18,
      "lastName": "Somby",
      "firstName": "Annabel",
      "email": "annabel.somby@example.com"
    },
    {
      "id": 19,
      "lastName": "Brand",
      "firstName": "Friedrich-Karl",
      "email": "friedrich-karl.brand@example.com"
    },
    {
      "id": 20,
      "lastName": "Leibold",
      "firstName": "Sibylle",
      "email": "sibylle.leibold@example.com"
    },
    {
      "id": 21,
      "lastName": "Bredesen",
      "firstName": "Kayla",
      "email": "kayla.bredesen@example.com"
    },
    {
      "id": 22,
      "lastName": "Riley",
      "firstName": "Jesus",
      "email": "jesus.riley@example.com"
    },
    {
      "id": 23,
      "lastName": "Roux",
      "firstName": "Evan",
      "email": "evan.roux@example.com"
    },
    {
      "id": 24,
      "lastName": "Roussel",
      "firstName": "Angelica",
      "email": "angelica.roussel@example.com"
    },
    {
      "id": 25,
      "lastName": "Manninen",
      "firstName": "Konsta",
      "email": "konsta.manninen@example.com"
    },
    {
      "id": 26,
      "lastName": "Mortensen",
      "firstName": "Cecilie",
      "email": "cecilie.mortensen@example.com"
    },
    {
      "id": 27,
      "lastName": "Çetiner",
      "firstName": "Oya",
      "email": "oya.cetiner@example.com"
    },
    {
      "id": 28,
      "lastName": "Burke",
      "firstName": "Bessie",
      "email": "bessie.burke@example.com"
    },
    {
      "id": 29,
      "lastName": "Gimenez",
      "firstName": "Angeles",
      "email": "angeles.gimenez@example.com"
    },
    {
      "id": 30,
      "lastName": "Wijnker",
      "firstName": "Wouter-Jan",
      "email": "wouter-jan.wijnker@example.com"
    },
    {
      "id": 31,
      "lastName": "Lorenzo",
      "firstName": "Elisa",
      "email": "elisa.lorenzo@example.com"
    },
    {
      "id": 32,
      "lastName": "Baltzersen",
      "firstName": "Niklas",
      "email": "niklas.baltzersen@example.com"
    },
    {
      "id": 33,
      "lastName": "Hawkins",
      "firstName": "Tomothy",
      "email": "tomothy.hawkins@example.com"
    },
    {
      "id": 34,
      "lastName": "Streicher",
      "firstName": "Toralf",
      "email": "toralf.streicher@example.com"
    },
    {
      "id": 35,
      "lastName": "Ramos",
      "firstName": "David",
      "email": "david.ramos@example.com"
    },
    {
      "id": 36,
      "lastName": "Lima",
      "firstName": "Miguel",
      "email": "miguel.lima@example.com"
    },
    {
      "id": 37,
      "lastName": "Aşıkoğlu",
      "firstName": "Emre",
      "email": "emre.asikoglu@example.com"
    },
    {
      "id": 38,
      "lastName": "Guillot",
      "firstName": "Sandro",
      "email": "sandro.guillot@example.com"
    },
    {
      "id": 39,
      "lastName": "Mendoza",
      "firstName": "Cameron",
      "email": "cameron.mendoza@example.com"
    },
    {
      "id": 40,
      "lastName": "Leon",
      "firstName": "Nuria",
      "email": "nuria.leon@example.com"
    },
    {
      "id": 41,
      "lastName": "Madsen",
      "firstName": "Signe",
      "email": "signe.madsen@example.com"
    },
    {
      "id": 42,
      "lastName": "Droste",
      "firstName": "Rudi",
      "email": "rudi.droste@example.com"
    },
    {
      "id": 43,
      "lastName": "Ambrose",
      "firstName": "Madison",
      "email": "madison.ambrose@example.com"
    },
    {
      "id": 44,
      "lastName": "Ijsseldijk",
      "firstName": "Els",
      "email": "els.ijsseldijk@example.com"
    },
    {
      "id": 45,
      "lastName": "Vega",
      "firstName": "Roberto",
      "email": "roberto.vega@example.com"
    },
    {
      "id": 46,
      "lastName": "Black",
      "firstName": "James",
      "email": "james.black@example.com"
    },
    {
      "id": 47,
      "lastName": "سهيلي راد",
      "firstName": "محمدپارسا",
      "email": "mhmdprs.shylyrd@example.com"
    },
    {
      "id": 48,
      "lastName": "سهيلي راد",
      "firstName": "پوریا",
      "email": "pwry.shylyrd@example.com"
    },
    {
      "id": 49,
      "lastName": "Leclerc",
      "firstName": "Andri",
      "email": "andri.leclerc@example.com"
    },
    {
      "id": 50,
      "lastName": "Wilson",
      "firstName": "Benjamin",
      "email": "benjamin.wilson@example.com"
    }
  ]

  
  
  constructor() {
  }
  findById(id: number) {
    return this.data.find(obj => obj.id === id)
  }
}
