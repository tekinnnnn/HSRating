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

## Ayarlar ve Varsayılan Değerleri

|Ayar              |Varsayılan Değer|Açıklama|
|:-----------------|:---------------|:-------|
|starColor         | #ffffd2                            | Yıldızların mouse üzerinde değilkenki rengi|
|starHoverColor    | #f2f200                            | Yıldızların mouse üzerine geldiğinde ve tıklandıldığındaki rengi|
|backgroundColor   | transparent                        | Yıldızların arkaplan rengi|
|starWidth         | 50                                 | Her bir yıldızın genişliği|
|starCount         | 10                                 | Yıldız sayısı|
|pollingInterval   | 10                                 | Oylama aralığı [1,2,3,..,10,..,9999,..]|
|percent           | true                               | Yarım puan oy (verebilme,verememe) [true,false]|
|transition        | fill 1s cubic-bezier(0.4, 0, 1, 1) | Transition effect|

## Nasıl çalışır?

Öncelikle sayfanıza JQuery kütüphanesini ve HSRating System scriptini aşağıda gösterildiği gibi eklemeniz gerekmektedir.

```html
<script type="text/javascript" src="yourJavascriptDirectory/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="yourJavascriptDirectory/halfStar.js"></script>
```

Daha sonra ***yukarıdaki satırların altında olmak kaydıyla*** sayfanın istediğiniz yerine aşağıdaki satırları eklemeniz yeterlidir.
```html
<script type="text/javascript">
  ratingStar();
</script>
```
*Özelleştirme yapmak istiyorsanız;*

 Örneğin oylamayı 15 puan üzerinden yapmak ve yarım puan oylamayı açık yapmak istiyorsanız
```html
<script type="text/javascript">
var settings = {
        "pollingInterval": 15,
        "percent": true
    };
ratingStar(settings);
</script>
```
scriptinizi yukarıdaki şekilde değiştirmeniz yeterli olacaktır
