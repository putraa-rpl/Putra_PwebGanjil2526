var jm;
jm=prompt('Jenis Minuman:');
switch(jm.toLowerCase()) {

    case'teh manis':
    document.writeln('<h3>Hari Ini Minum Teh Manis</h3>');
    break;

    case'kopi':
    document.writeln('<h3>Hari Ini Minum Kopi</h3>');
    break;

    case 'jus jeruk':
    document.writeln('<h3>Hari Ini Minum Jus Jeruk</h3>');
    break;

    case 'susu':
    document.writeln('<h3>Hari Ini Minum Susu</h3>');
    break;    

    default:
    document.writeln('<h3>Hari Ini Tidak Minum Apa-Apa</h3>');    
}