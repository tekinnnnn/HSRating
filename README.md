# HSRating System

## Nedir ?
* Javascript
* Jquery
* SVG

kullanarak;
* istenilen sayıda yıldız ile 
* istenilen puanlama ölçütü üzerinden (örn : 1 | 4 | 5 | 8 | 10 | 50 )
* yarım puan oy (verilebilme | verilememe)

ve daha birçok kişiselleştirmeye imkan tanıyan rating (puanlama) scriptidir.

## Ne yapmanıza gerek kalmaz?
* web sitenizde puanlama olanağı sunmak için api lerle uğraşmazsınız
* HSRating System SVG kullandığı için sayfa yüklenme hızınızı düşüren imaj dosyalarıyla uğraşmazsınız
* Yıldızların rengini değiştirmek için bir imaj editöre ihtiyacınız kalmaz, rengin kodunu girersiniz ve iş biter

## Nasıl çalışır?

**Coming Soon**

### Ayarlar ve Varsayılan Değerleri

|Ayar|Varsayılan Değer|Açıklama|
|:---|:---------------|:-------|
|starColor| #ffffd2 | Yıldızların mouse üzerinde değilkenki rengi | Fill|
|starHoverColor| #f2f200 | Yıldızların mouse üzerine geldiğinde ve tıklandıldığındaki rengi | Fill|
|backgroundColor| transparent | Yıldızların arkaplan rengi | Boşluklar|
|starWidth| 50 | Her bir yıldızın genişliği|
|starCount| 10 | Yıldız sayısı|
|pollingInterval| 10 | Oylama aralığı | [1|2|3|..|10|..|9999|..]|
|percent| true | Yarım puan oy verebilme | Verememe | [true|false]|
|transition| fill 1s cubic-bezier(0.4, 0, 1, 1) | Transition effect|
