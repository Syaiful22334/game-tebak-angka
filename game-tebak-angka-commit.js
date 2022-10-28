 //menambahkan fitur baru
 
 confirm('Selamat Datang Di Game Tebak Angka, kamu punya 3 kesempatan untuk bermain permainaan ini')
 
 //menentukan angka random
 var next = true
 while( next ) {
   var angka = Math.floor(Math.random() * 10);
  //nyawa
  var nyawa = 3
  while ( nyawa > 0 ) {
      
      if( nyawa == 1 ) {
        alert('WASPADA NYAWA KAMU TERSISA 1')
      }
      
      // menentukan bilangan user
      
      if( angka % 2 == 0 ) {
        var user = prompt('Masukkan angka tebakanmu\nJumlah kesempatanmu ' + nyawa + '\nclue : \n  angka 1-10\n  bilangan GENAP')
      } else {
        var user = prompt('Masukkan angka tebakanmu\nJumlah kesempataan mu ' + nyawa +  '\nclue : \n  angka 1-10\n  bilangan GANJIL')
      }
      
      // var user = prompt( angka + 'Silahkan masukkan angka tebakanmu ( clue : bilangan bulat 1 - 10 ) \nKamu memiliki ' + nyawa + ' kesempatan' )
      
      // //menentukan hasil
      if( user == angka ) {
        alert('Selamat jawaban kamu BENAR !!')
        nyawa = 0
      } else if ( user >  10 ) {
        alert('Jawaban kamu SALAH !! \nBilangan ' + user + ' lebih dari 10')
      } else if ( user != angka ) {
        alert('Jawaban Kamu SALAH !!')
      } else {
        alert('Yang kamu pilih bukanlah ANGKA !!')
      }
    nyawa --  
      
  }
alert('Jawaban yang benar adalah ' + angka ) 
  next = confirm('bermain lagi??')
}
alert('terima kasih telah bermain bersama kami')