import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-dentro-prueba',
  templateUrl: './dentro-prueba.component.html',
  styleUrls: ['./dentro-prueba.component.css']
})
export class DentroPruebaComponent implements OnInit{
  
  lectura: Reading;
  questions: Question[];
  selectedQuestion: number;
  activeQuestion: Question;
  form: FormGroup;
  tmpQuestionsList: Question[];
  

  constructor(private router: Router){//}, private route: ActivatedRoute, public fb: FormBuilder,) {
    // this.form = this.fb.group({userResponse: ['', Validators.required]});
  }

  ngOnInit(){
    let i=1;
    this.lectura = new Reading();
    //this.questions = new Question().;
    this.selectedQuestion = 1;
    this.tmpLoadQuestions();

    // Obtener el texto sobre el cual se van a realizar las preguntas
    this.getReading();
    this.questions = [];
    this.lectura.questionsId.forEach(x => this.questions.push(this.getQuestion(x)))

    this.questions.forEach(x=>x.displayNumber=i++)
    
    this.changeItem(this.selectedQuestion);
  }

  /*
  Retorna la lectura solicitada
   */
  getReading(){
    this.lectura.idReading = 1
    this.lectura.readingTitle = "El árbol mágico";
    this.lectura.readingText = "Hace mucho mucho tiempo, un niño paseaba por un prado en cuyo centro encontró un árbol con un cartel que decía: soy un árbol encantado, si dices las palabras mágicas, lo verás. El niño trató de acertar el hechizo, y probó con abracadabra, supercalifragilisticoespialidoso, tan-ta-ta-chán, y muchas otras, pero nada. Rendido, se tiró suplicante, diciendo: \"¡¡por favor, arbolito!!\", y entonces, se abrió una gran puerta en el árbol. Todo estaba oscuro, menos un cartel que decía: \"sigue haciendo magia\". Entonces el niño dijo \"¡¡Gracias, arbolito!!\", y se encendió dentro del árbol una luz que alumbraba un camino hacia una gran montaña de juguetes y chocolate. El niño pudo llevar a todos sus amigos a aquel árbol y tener la mejor fiesta del mundo, y por eso se dice siempre que \"por favor\" y \"gracias\", son las palabras mágicas"
    this.lectura.readingAuthor = "Pedro Pablo Sacristan";
    this.lectura.questionsId = [1, 2, 3, 4];
  }

  redigigirLogin() {
    this.router.navigate(["login"]);
  }

  /**
   * Retorna la pregunta especificada por medio del Id
   * @param idQuestion 
   * @returns 
   */
  getQuestion(idQuestion:Number): Question{
    let question = new Question();
    
    // Validar que el indice sea correcto
    if (idQuestion < 0){
      return null;
    }
    question = this.tmpQuestionsList.filter(x => x.idQuestion == idQuestion)[0];

    return question;
  }

  /**
   * Metodo para modificar la presentación de la pregunta, según se vaya seleccionando en la barra superior
   * @param selectedItem Valor seleccionado en la lista de preguntas
   */
  changeItem(selectedItem:Number){
    this.selectedQuestion = selectedItem.valueOf();
    this.activeQuestion = this.getQuestion(this.selectedQuestion);
  }

  SaveOption(){
    console.log("it works!!!");
  }

  /**
   * Metodo de prueba para cargar preguntas de prueba
   */
  tmpLoadQuestions(){
    let options: Option[];

    options = [];
    options.push({idOpt: 1, optText: "Un árbol mágico"});
    options.push({idOpt: 2, optText: "La importancia de los modales"});
    options.push({idOpt: 3, optText: "El uso de las palabras mágicas"});
    options.push({idOpt: 4, optText: "ninguna de las anteriores"});
    this.tmpQuestionsList = [{idQuestion: 1, questionText: "¿De qué se trata el texto?", displayNumber:0, options}];

    options = [];
    options.push({idOpt: 5, optText: "Sacristan Pedro Pablo"});
    options.push({idOpt: 6, optText: "J. K. Rolling"});
    options.push({idOpt: 7, optText: "Carl Sagan"});
    options.push({idOpt: 8, optText: "Ernest Cline"});
    this.tmpQuestionsList.push({idQuestion: 2, questionText: "¿Quien es el autor?", displayNumber:0, options});

    options = [];
    options.push({idOpt: 9, optText: "Leviósa, no leviosá"});
    options.push({idOpt: 10, optText: "Abada Kadavra"});
    options.push({idOpt: 11, optText: "Por Favor"});
    options.push({idOpt: 12, optText: "Reducto"});
    this.tmpQuestionsList.push({idQuestion: 3, questionText: "¿Cuales son las palabras mágicas?", displayNumber:0, options});

    options = [];
    options.push({idOpt: 13, optText: "La luz del árbol"});
    options.push({idOpt: 14, optText: "Chocolate y juguetes"});
    options.push({idOpt: 15, optText: "Un anillo cool"});
    options.push({idOpt: 16, optText: "supercalifragilisticoespialidoso"});
    this.tmpQuestionsList.push({idQuestion: 4, questionText: "¿Cual es el premio que recibió el niño?", displayNumber:0, options})
  }

}

/**
 * Objeto para manejar una sola lectura
 */
class Reading {
  idReading
  readingTitle: String;
  readingText: String;
  readingAuthor: String;
  questionsId: Number[];
}

/**
 * Objeto para almacenar una única pregunta
 */
class Question {
  idQuestion:Number;
  displayNumber: Number;
  questionText: String;
  options: Option[];
};

/**
 * Objeto para manejar una unica opción de respuesta
 */
class Option{
  idOpt: number;
  optText: String;
}

/**
 * Objeto para manejar una unica respuesta del usuario
 */
class userResponse{
  idQuestion: Number;
  idOpt: Number;
}