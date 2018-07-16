## Instalacja

$ composer install  
$ npm install  
$ npm i -g typescript  
$ npm i -g typings  
$ npm i -g gulp  
$ typings install  

## Kompilacja i uruchomianie

 $ gulp  
 $ tsc   
 
rozruch:
 
 $ php -S localhost:8000 -t public  

goto http://localhost:8000/  

## Struktura
 -resources/src  
 App.ts bootowany plik frontendu  
 
 app /  
 --components - głównie tutaj skupiamy się nad rozwojem aplikacji  
 --config - katalog z cfg aplikacji  
 --provider - klasy dostarczające rozruchowi zarejestrowanych bytów np. ustawienia ajaxa, używane kontrollery czy middlewares  
 
 core /
 katalog core powinien być praktycznie najrzadziej modyfikowany, jest to kod binarny silnika, jego rozbudowa powinna być kojarzona z rozwojem frameworka  
 
 
 ## Dodawanie komponentu
 
 {$name} - nazwa naszego komponentu  
 tworzymy katalog w src/app/components/{$name} 
 
 rejestrujemy kontroller komponentu w ControllerProvider

 Rejestrujemy path aplikacji za pomocją dekoratora @Path dzięki któremu definiujemy path GET oraz opcjonalnie middlewares dla danej metody,  
 globalne middlewares mozemy definiowac w konstruktorze kontrolera za pomocą  
 $ this.middlewares = [ new MyMiddleware()];
 
 definiowanie metody  
  @Path("/example")  
  async example(){  
     let tempalte: Jquery<HTMLElement>  = await this.view.getTemplateUrl("/example:subfile");  
     this.view.render();  
 } 
 
 @Path("/example", [new CountVisitMiddleware()]) {  
     let tempalte: Jquery<HTMLElement>  = await this.view.getTemplateUrl("/example:subfile");  
     this.view.render();  
 }  

 

