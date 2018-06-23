angular
.module('app.home')
.controller('ArticlesController', function($scope){

  $scope.articles = [
    {id:0, title:'Dapibus ac facilisis in', content:'Blah, blah, blah...blah blah blah blah', image:"./assets/images/logo.png"},
    {id:1, title:'Morbi leo risus', content:'Zippity do dah, zippity day', image: "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Cocker-Spaniel-Puppies-For-Sale-600x600.jpg"},
    {id:2, title:'Porta ac consectetur ac', content:'Hocus pocus the jocus is on locus'},
    {id:3, title:'Vestibulum at eros', content:`When, in the course of human events, it becomes necessary for one people to dissolve the political bonds which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the laws of nature and of nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.
      We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable rights, that among these are life, liberty and the pursuit of happiness. That to secure these rights, governments are instituted among men, deriving their just powers from the consent of the governed. That whenever any form of government becomes destructive to these ends, it is the right of the people to alter or to abolish it, and to institute new government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their safety and happiness. Prudence, indeed, will dictate that governments long established should not be changed for light and transient causes; and accordingly all experience hath shown that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same object evinces a design to reduce them under absolute despotism, it is their right, it is their duty, to throw off such government, and to provide new guards for their future security.
    `}
  ]

  $scope.view = function(article) {
    $scope.article = article;
    console.log(article);
  }

  $scope.name = "paula";
})
