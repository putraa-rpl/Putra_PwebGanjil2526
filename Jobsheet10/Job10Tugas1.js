document.writeln("<table border='1'");
var namab, harga, Jumlah, sub;

namab=prompt("Nama Barang");
harga=prompt("Harga Barang");
Jumlah=prompt("Jumlah Barang");
sub=harga*Jumlah;

document.writeln("<tr>");
document.writeln("<td>Nama Barang</td> <td>Harga Barang</td> <td>Jumlah Beli</td> <td>Sub Total</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln('<td>' +namab+ '</td><td>' +harga+ '</td> <td>' +Jumlah+ '</td> <td>' +sub+ '</td>');
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln('<td colspan="4"> Khieza Putra Pradipta </td>');
document.writeln("</tr>");
document.writeln("</table>")