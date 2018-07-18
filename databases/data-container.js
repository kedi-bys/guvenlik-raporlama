module.exports = {
  categories: [
    {
      name: 'Cerrahi Güvenlik',
      locations: [
        { name: 'Acil Sağlık Hizmetleri (Ambulans)' },
        { name: 'Acil Sağlık Hizmetleri (Olay Yeri)' },
        { name: 'Acil Servis' },
        { name: 'Açık Klinik' },
        { name: 'Ameliyathane (Acil)' },
        { name: 'Ameliyathane (Klinik)' },
        { name: 'Ameliyathane (Merkez)' },
        { name: 'Cerrahi Klinik' },
        { name: 'Klinik (Cerrahi)' },
        { name: 'Pembe Klinik' },
        { name: 'Poliklinik' },
        { name: 'Turkuaz Klinik' },
        { name: 'Turuncu Klinik' },
        { name: 'Yoğun Bakım' }
      ],
      occupationalGroups: [
        { name: 'Acil Tıp Teknisyeni/Teknikeri' },
        { name: 'Anestezi Teknisyeni/Teknikeri' },
        { name: 'Asistan (Anestezi)' },
        { name: 'Asistan (Cerrahi Branş)' },
        { name: 'Biyomedikal Mühendisi' },
        { name: 'Hasta' },
        { name: 'Hasta Yakını' },
        { name: 'Hemşire' },
        { name: 'Kişiden Kaynaklanmayan Hata' },
        { name: 'Teknisyen' },
        { name: 'Temizlik Personeli' },
        { name: 'Uzman Hekim (Asistan)' },
        { name: 'Uzman Hekim (Cerrahi Branş)' }
      ],
      incorrectOperations: [
        {
          name: 'Ameliyat Kesisi Öncesi Kontroller',
          details: [
            { name: 'Anestezi kaynaklı gerçekleşebilecek kritik olayların değerlendirilmemesi' },
            { name: 'Antikoagülan kullanımının sorgulanmaması' },
            { name: 'Cerrahi kaynaklı gerçekleşebilecek kritik olayların değerlendirilmemesi' },
            { name: 'Ekip üyelerinin kendini tanıtmaması' },
            { name: 'Gerekli cerrahi profilaksinin uygunlanmaması' },
            { name: 'Gerekli DVT-profilaksisinin uygulanmaması' },
            { name: 'Hasta kimliği, ameliyat yeri ve cerrahi işlemin doğrulanmaması' },
            { name: 'Kan şekeri kontrolü gerekliliğinin değerlendirilmemesi' },
            { name: 'Malzemelerin hazır ve steril olduğunun kontrol edilmemesi' }
          ]
        },
        {
          name: 'Ameliyat Sonu Kontrolleri',
          details: [
            { name: 'Alınan numunelerin uygun şekilde etiketlenmemesi' },
            { name: 'Hasta kimliği, ameliyat yeri ve cerrahi işlemin doğrulanmaması' },
            { name: 'Kullanılan alet, spanç, kompres ve iğne sayımlarının kontrol edilmemesi' },
            { name: 'Olası anestezi kritik bakım gereksinimlerinin değerlendirilmemesi' },
            { name: 'Olası cerrahi kritik bakım gereksinimlerinin değerlendirilmemesi' },
            { name: 'Post-op hastanın transfer edileceği bölümün belirtilmemesi' }
          ]
        },
        {
          name: 'Ameliyat Sürecindeki Takip ve Kontroller',
          details: [
            { name: 'Frozen gerektiği durumda numunenin uygun şekilde etiketlenmemesi' },
            { name: 'Kan/kan ürünü kullanımı gerektiğinde hastaya uygunluk kontrolünün yapılmaması' }
          ]
        },
        {
          name: 'Ameliyathane Cerrahi İşlem Hazırlığı',
          details: [
            { name: 'Ameliyat odasının ve ameliyat masasının temizliğinin uygun olmaması' },
            { name: 'Anestezi cihaz ve ekipmanlarının kontrol edilmemesi' },
            { name: 'Kalibrasyon/bakım eksikliğinden kaynaklanan ekipman arızası' },
            { name: 'Oda sıcaklığı/nemin uygunsuzluğu/kontrol edilmemesi' },
            { name: 'Partikül ölçümlerinin yapılmaması/kontrol edilmemesi' },
            { name: 'Prizlerin kesintisiz güç kaynağına bağlı olduğunun kontrol edilmemesi' },
            { name: 'Tıbbi gaz sisteminin kontrol edilmemesi' }
          ]
        },
        {
          name: 'Ameliyathane Transfer ve Hasta Kabulü',
          details: [
            { name: 'Hasta kimliği, ameliyat yeri ve cerrahi işlemin doğrulanmaması' },
            { name: 'Hasta transferine sağlık çalışanının eşlik etmemesi' },
            { name: 'Hastanın sağlık çalışanına testlim edilmemesi' },
            { name: 'Teslim sırasında ameliyat sürecine ait bilgilerin iletilmemesi' }
          ]
        },
        {
          name: 'Ameliyathaneden Hastanın Ayrılışı ve Transferi',
          details: [
            { name: 'Cerrahi kritik bakım gereksinimlerinin hastayı teslim alan sağlık personeline iletilmemesi' },
            { name: 'Hasta kimliği, cerrahi işlem ve hastanın transfer edileceği bölümün doğrulanması' },
            { name: 'Hasta transferine sağlık çalışanının eşlik etmemesi' },
            { name: 'Hastanın sağlık çalışanına teslim edilmemesi' }
          ]
        },
        {
          name: 'Anestezi Öncesi Hazırlık ve Kontroller',
          details: [
            { name: 'Alerji durumunun değerlendirilmemesi' },
            { name: 'Ameliyat bölgesinin/tarafının işaretlenmesinin kontrol edilmemesi' },
            { name: 'Anestezi risklerinin değerlendirilmemesi' },
            { name: 'Hasta kimliği, ameliyat yeri ve cerrahi işlemin doğrulanmaması' },
            { name: 'Hasta rızasının kontrol edilmemesi' },
            { name: 'İhtiyaç duyulabilecek görüntüleme cihazlarının kontrol edilmemesi' },
            { name: 'Kan transfüzyonu gerekliliğinin değerlendirilmemesi' },
            { name: 'Pulse oksimetre cihazının hasta üzerinde olmaması/kontrol edilmemesi' }
          ]
        },
        {
          name: 'Klinik Cerrahi İşlem Hazırlığı',
          details: [
            { name: 'Ameliyat bölgesinin tıraşının yapılmamış olması' },
            { name: 'Ameliyat bölgesinin/tarafının işaretlenmemesi' },
            { name: 'Ameliyat bölgesinin/tarafının kontrol edilmemesi' },
            { name: 'Ameliyat için gerekli malzeme, kan/kan ürünlerinin tedarik kontrolünün yapılmaması' },
            { name: 'Ameliyat öncesi özel işlemin (lavman uygulaması vb.) atlanması' },
            { name: 'Hasta rızasının alınmaması' },
            { name: 'Hasta rızasının kontrol edilmemesi' },
            { name: 'Makyaj, protez ve değerli eşyalarının çıkarıldığının teyit edilmemesi' },
            { name: 'Pre-op açlık gerekliliğinin teyit edilmemesi' },
            { name: 'Tetkik ve tahlillerin hasta yanında olduğunun kontrol edilmemesi' }
          ]
        }
      ]
    },
    {
      name: 'Çalışan Güvenliği',
      locations: [
        { name: '1.Kat Asansör Mahali' },
        { name: '1.Kat Poliklinikler' },
        { name: '1.Kat Yangın Merdiveni' },
        { name: '1.Kat Yönetim Katı' },
        { name: '10.Kat Teknik Mahal' },
        { name: '2.Kat Asansör Mahali' },
        { name: '2.Kat Gündüz Salonu' },
        { name: '2.Kat Koridor' },
        { name: '2.Kat Yangın Merdiveni' },
        { name: '3.Kat Asansör Mahali' },
        { name: '3.Kat Gündüz Salonu' },
        { name: '3.Kat Koridor' },
        { name: '3.Kat Yangın Merdiveni' },
        { name: '4.Kat Asansör Mahali' },
        { name: '4.Kat Gündüz Salonu' },
        { name: '4.Kat Koridor' },
        { name: '4.Kat Yangın Merdiveni' },
        { name: '5.Kat Asansör Mahali' },
        { name: '5.Kat Gündüz Salonu' },
        { name: '5.Kat Koridor' },
        { name: '5.Kat Yangın Merdiveni' },
        { name: '6.Kat Asansör Mahali' },
        { name: '6.Kat Gündüz Salonu' },
        { name: '6.Kat Koridor' },
        { name: '6.Kat Yangın Merdiveni' },
        { name: '7.Kat Asansör Mahali' },
        { name: '7.Kat Gündüz Salonu' },
        { name: '7.Kat Koridor' },
        { name: '7.Kat Yangın Merdiveni' },
        { name: '8.Kat Asansör Mahali' },
        { name: '8.Kat Gündüz Salonu' },
        { name: '8.Kat Koridor' },
        { name: '8.Kat Yangın Merdiveni' },
        { name: '9.Kat Konferans' },
        { name: 'Asma Kat Çağrı Merkezi' },
        { name: 'Asma Kat Muhasebe' },
        { name: 'Asma Kat Psikoterapi Hizmetleri' },
        { name: 'B1.Kat Depo Mahali' },
        { name: 'B1.Kat EKT Mahali' },
        { name: 'B1.Kat Ergoterapi' },
        { name: 'B1.Kat İdari Personel Mahali' },
        { name: 'B1.Kat Laboratuvar' },
        { name: 'B1.Kat Personel Dinlenme Alanı' },
        { name: 'B1.Kat Personel Giriş' },
        { name: 'B1.Kat Yemekhane' },
        { name: 'B2.Kat Ameliyathane' },
        { name: 'B2.Kat Mutfak' },
        { name: 'B2.Kat Radyoloji' },
        { name: 'B2.Kat Teknik Mahal' },
        { name: 'B2.Kat Yoğun Bakım' },
        { name: 'B3.Kat Otopark' },
        { name: 'B4.Kat Otopark' },
        { name: 'Zemin Kat Acil Servis' },
        { name: 'Zemin Kat Hastane Giriş' },
        { name: 'Zemin Kat Kafeterya' },
        { name: 'Zemin Kat Lobi' },
        { name: 'Zemin Kat Otopark Rampa' },
        { name: 'Zemin Kat Poliklinikler' }
      ],
      occupationalGroups: [
        { name: 'Acil Doktoru / Tıbbi Direktör Yrd.' },
        { name: 'Acil Hekimi' },
        { name: 'Acil Servis Sorumlusu' },
        { name: 'Acil Tıp Teknisyeni' },
        { name: 'Ahşap Hocası' },
        { name: 'Ambulans Şoförü' },
        { name: 'Ameliyathane Hemşiresi' },
        { name: 'Ameliyathane Sekreteri' },
        { name: 'Ameliyathane Sorumlu Hemşiresi' },
        { name: 'Ameliyathane Teknikeri' },
        { name: 'Anestezi Teknikeri' },
        { name: 'Anestezi Ve Reanimasyon Uzmanı' },
        { name: 'Anlaşmalı Kurumlar Sorumlusu' },
        { name: 'Arşiv Görevlisi' },
        { name: 'Arşiv Sorumlusu' },
        { name: 'Asistan' },
        { name: 'Bahçıvan' },
        { name: 'Başhemşire' },
        { name: 'Beyin Cerrahi Uzmanı' },
        { name: 'Bilgi İşlem Yöneticisi' },
        { name: 'Biyokimya Uzmanı' },
        { name: 'Biyomedikal Mühendisi' },
        { name: 'Biyomedikal Teknikeri' },
        { name: 'Cerrahi Servis Hemşiresi' },
        { name: 'Cerrahi Servis Sorumlu Hemşiresi' },
        { name: 'Çağrı Merkezi Görevlisi' },
        { name: 'Çağrı Merkezi Şefi' },
        { name: 'Çay Servisi Görevlisi' },
        { name: 'Çocuk Ergen Psikiyatri Uzmanı' },
        { name: 'Destek Hizmetleri Görevlisi' },
        { name: 'Destek Hizmetleri Saha Denetim ve Koordinasyon Sorumlusu' },
        { name: 'Destek Hizmetleri Yöneticisi' },
        { name: 'Dil Ve Konuşma Terapisti' },
        { name: 'Diyetisyen' },
        { name: 'Eczacı' },
        { name: 'Eczacı / Eczane Yöneticisi' },
        { name: 'Eczane Teknisyeni' },
        { name: 'Eczane Teknisyeni' },
        { name: 'Eczane Yöneticisi' },
        { name: 'Eeg Teknisyeni' },
        { name: 'Eğitim Hemşiresi' },
        { name: 'Elektrik Teknisyeni' },
        { name: 'Enfeksiyon Kontrol Hemşiresi' },
        { name: 'Enfeksiyon Uzmanı' },
        { name: 'Ergoterapi Sorumlusu' },
        { name: 'Ergoterapist' },
        { name: 'Finans Elemanı' },
        { name: 'Finans Sorumlusu' },
        { name: 'Fizik Tedavi Uzmanı' },
        { name: 'Fizyoterapist' },
        { name: 'Gece Hasta Danışmanı' },
        { name: 'Gece Vezne Görevlisi' },
        { name: 'Genel Cerrahi Uzmanı' },
        { name: 'Göğüs Hastalıkları Uzmanı' },
        { name: 'Halkla İlişkiler Asistanı' },
        { name: 'Hasta Danışmanı' },
        { name: 'Hasta Danışmanı' },
        { name: 'Hasta Danışmanları Sor.' },
        { name: 'Hasta Hakları Asistanı' },
        { name: 'Hasta Hakları Sorumlusu/ Yönetici Asistanı' },
        { name: 'Hasta Hizmetleri Yöneticisi' },
        { name: 'Helpdesk Uzmanı' },
        { name: 'Hemşire' },
        { name: 'Hemşire' },
        { name: 'Hemşirelik Hizmetleri Yöneticisi' },
        { name: 'İdari Amir' },
        { name: 'İdari Direktör' },
        { name: 'İnsan Kaynakları Uzmanı' },
        { name: 'İş Güvenliği Uzmanı' },
        { name: 'Kalite Uzmanı' },
        { name: 'Kalite Ve İk Asistanı' },
        { name: 'Kalite Ve İk Yönetici Yardımcısı' },
        { name: 'Kalite Ve İk Yöneticisi' },
        { name: 'Kardiyoloji Uzmanı' },
        { name: 'Kat Hekimi' },
        { name: 'Kat Psikoloğu' },
        { name: 'KBB Uzmanı' },
        { name: 'Kurumsal İletişim Yöneticisi' },
        { name: 'Laboratuvar Teknikeri' },
        { name: 'Laboratuvar Teknisyeni' },
        { name: 'Lojistik Depo Görevlisi' },
        { name: 'Lojistik Depo Sorumlusu' },
        { name: 'Lojistik Koordinasyon Sorumlusu' },
        { name: 'Mali İşler Yöneticisi' },
        { name: 'Medikal Muhasebe Görevlisi' },
        { name: 'Muhasebe Asistanı' },
        { name: 'Muhasebe Görevlisi' },
        { name: 'Muhasebe Uzmanı' },
        { name: 'Muhasebe Yönetici Yrd.' },
        { name: 'Muhasebe Yöneticisi' },
        { name: 'Muzik Hocası' },
        { name: 'Nöroloji Uzmanı' },
        { name: 'Ofisboy' },
        { name: 'Psikiyatri Uzmanı' },
        { name: 'Psikolog' },
        { name: 'Psikoloji Hizmetleri Genel Koordinatörü' },
        { name: 'Psikoterapi Hizmetleri Koordinatörü' },
        { name: 'Radyoloji Sekreteri' },
        { name: 'Radyoloji Teknisyeni' },
        { name: 'Radyoloji Uzmanı' },
        { name: 'Resim Hocası' },
        { name: 'Sağlık Güvenlik Personeli' },
        { name: 'Satın Alma Uzmanı' },
        { name: 'Satın Alma Yöneticisi' },
        { name: 'Seramik Hocası' },
        { name: 'Sistem Uzmanı' },
        { name: 'Sorumlu Ameliyathane Teknikeri' },
        { name: 'Sorumlu Anestezi Teknikeri' },
        { name: 'Sorumlu Hemşire' },
        { name: 'Sorumlu Hemşire/Başhemşire Yrd.' },
        { name: 'Sorumlu Kat Psikoloğu' },
        { name: 'Sosyal Hizmet Uzmanı' },
        { name: 'Spor Hocası' },
        { name: 'Sterilizasyon Teknisyeni' },
        { name: 'Tıbbi Direktör' },
        { name: 'Tıbbi Sekreter' },
        { name: 'Tıbbi Sekreter Sorumlusu' },
        { name: 'Tmu Sorumlusu' },
        { name: 'Tmu Teknisyeni' },
        { name: 'Uluslararası Hasta İlişkileri Uzmanı' },
        { name: 'Uzman Hekim' },
        { name: 'Vale &amp; Otopark Görevlisi' },
        { name: 'Vezne Asistanı' },
        { name: 'Vezne Görevlisi' },
        { name: 'Yatan Hasta Danışmanı' },
        { name: 'Yatış Taburcu Görevlisi' },
        { name: 'Yatış Taburcu Sorumlusu' },
        { name: 'Yazı İşleri Yöneticisi' },
        { name: 'Yazılım Destek Uzmanı' },
        { name: 'Yazılım Uzman Yardımcısı' },
        { name: 'Yazılım Uzmanı' },
        { name: 'Yoğun Bakım Hemşiresi' },
        { name: 'Yoğun Bakım Personeli' },
        { name: 'Yönetici Asistanı' },
        { name: 'Yönetim Kurulu Başkanı' },
        { name: 'Yönetim Kurulu Üyesi' }
      ],
      incorrectOperations: [
        {
          name: 'Diğer(yanıklar, takılma düşme, patlama, elektrik kazaları, gaz kaçakları, yangın vb.)',
          details: []
        },
        {
          name: 'Enfeksiyonlu atığa maruz kalma',
          details: []
        },
        {
          name: 'Kan ve vücut sıvılarının sıçraması',
          details: []
        },
        {
          name: 'Kas-İskelet sistemi yaralanmaları',
          details: []
        },
        {
          name: 'Kesici-delici alet yaralanması',
          details: []
        },
        {
          name: 'Kimyasal madde bulaşması',
          details: []
        },
        {
          name: 'Kontamine metaryalle temas',
          details: []
        },
        {
          name: 'Radyasyona maruz kalma',
          details: []
        },
        {
          name: 'Şiddet maruziyeti',
          details: []
        },
        {
          name: 'Zehirlenme',
          details: []
        }
      ]
    },
    {
      name: 'Hasta Güvenliği',
      locations: [
        { name: 'Acil Sağlık Hizmetleri (Ambulans)' },
        { name: 'Acil Sağlık Hizmetleri (Olay Yeri)' },
        { name: 'Acil Servis' },
        { name: 'Açık Klinik' },
        { name: 'Amatem' },
        { name: 'Ameliyathane' },
        { name: 'Cerrahi Klinik' },
        { name: 'Eczane' },
        { name: 'Kan Alma Birimi' },
        { name: 'Kişisel Hijyen Alanları' },
        { name: 'Kişisel Temizlik Alanı (Banyo, Tuvalet vb.)' },
        { name: 'Laboratuvar' },
        { name: 'Otopark' },
        { name: 'Pembe Klinik' },
        { name: 'Poliklinik' },
        { name: 'Teknik Birim' },
        { name: 'Tesis Bahçesi' },
        { name: 'Tıbbi Görüntüleme Birimi' },
        { name: 'Turkuaz Klinik' },
        { name: 'Turuncu Klinik' },
        { name: 'Yoğun Bakım Ünitesi' }
      ],
      occupationalGroups: [
        { name: 'Acil Tıp Teknisyeni/Teknikeri' },
        { name: 'Asistan' },
        { name: 'Diş Tabibi' },
        { name: 'Eczacı' },
        { name: 'Eczane Teknisyeni' },
        { name: 'Hasta' },
        { name: 'Hasta Yakını' },
        { name: 'Hemşire' },
        { name: 'Kişiden Kaynaklanmayan Hata' },
        { name: 'Pratisyen Hekim' },
        { name: 'Stajyer' },
        { name: 'Uzman Hekim' }
      ],
      incorrectOperations: [
        {
          name: 'Bakım, Teşhis ve Tedavi Sürecine İlişkin Hatalar',
          details: [
            { name: 'Bakım için gerekli asepsi/sterilizasyon/izolasyon koşullarının sağlanmaması' },
            { name: 'Bakım veya tedavi sonrasında gelişen komplikasyonların izlenmemesi' },
            { name: 'Bakım/tedavi gecikmesine bağlı olarak hastada komplikasyon gelişmesi' },
            { name: 'Bakım/tedavi uygulaması öncesinde hasta kimliğinin doğrulanmaması' },
            { name: 'Hasta bakım planının hasta ihtiyaçlarına göre belirlenmemesi' },
            { name: 'Hasta emniyetinin sağlanmaması' },
            { name: 'Hasta mahremiyetinin ihlal edilmesi' },
            { name: 'Hasta tesliminin uygun yapılmaması' },
            { name: 'Hastanın düşmesi' },
            { name: 'Hastanın nutrisyon açısından değerlendirilmemesi' },
            { name: 'Hastaya yanlış kan/kan ürünü verilmesi' },
            { name: 'Kalibrasyon süresi dolmuş tıbbi cihaz ile uygulama yapılması' },
            { name: 'Kırmızı kod durumuna müdahalenin geç yapılması' },
            { name: 'Konsültasyon gecikmesine bağlı olarak hastada komplikasyon gelişmesi' },
            { name: 'Mavi kod durumuna müdahalenin geç yapılması' },
            { name: 'Pembe kod durumuna müdahalenin geç yapılması' },
            { name: 'Tahlil ve tetkik sonuçlarının yanlış değerlendirilmesi' },
            { name: 'Tıbbi görüntüleme esnasında hastaya gerekli koruyucu ekipmanın kullandırılmaması' },
            { name: 'Yatış sürecinde hastada 3. seviye ve üstü bası ülseri oluşumu' },
            { name: 'Yenidoğanda geç tespit edilen hiperbilirubinemi' },
            { name: 'Yenidoğanda geç tespit edilen hipoglisemi' },
            { name: 'Yenidoğanda geç tespit edilen prematüre retinopati' }
          ]
        },
        {
          name: 'Bina Yapısı ile İlişkili Hatalar',
          details: [
            { name: 'Acil durum ve afet planının bulunmaması' },
            { name: 'Acil durum ve afet yönetimine ilişkin yönlendirmelerin eksik olması' },
            { name: 'Elektrik kaçağı sonucu hastanın yaralanması' },
            { name: 'Hasta yönlendirme işaretlerinin eksik olması/bulunmaması' },
            { name: 'Hastanın asansör arızası nedeni ile düşmesi/yaralanması' },
            { name: 'Hastanın asansör arızası nedeni ile mahsur kalması' },
            { name: 'Hastanın ıslak/kaygan zemin nedeni ile düşmesi/yaralanması' },
            { name: 'Hastanın yürüyen merdiven arızası nedeni ile düşmesi/yaralanması' },
            { name: 'Medikal gaz kontaminasyonu veya yanlış gaz karışımı' },
            { name: 'Su kaynaklarının kontaminasyonu' },
            { name: 'Su/kanalizasyon baskını' },
            { name: 'Temel tesis kaynakları ile ilişkili yedek sistemlerin zamanında devreye girmemesi (su, elektrik, gaz vb.)' },
            { name: 'Teşhis/tedavi amacı dışında hastanın tehlikeli atık/maddelere maruziyeti' },
            { name: 'Yangın/patlama sonucu hastanın yaralanması' },
            { name: 'Yaşlı veya engelli hastalara yönelik düzenlemelerin eksik olması' },
            { name: 'Yoğunbakım ünitelerinde gürültü kontrolünün sağlanmaması' }
          ]
        },
        {
          name: 'Cihaz/Ekipman/Sistem Kaynaklı Hatalar',
          details: [
            { name: 'Acil durum ve afet yönetimine ilişkin eğitimlerin verilmemesi' },
            { name: 'Arızalı ekipmanın zamanında onarılmaması/değiştirilmemesi' },
            { name: 'Asepsi koşullarının altyapı/ekipman eksikliği nedeni ile sağlanmaması' },
            { name: 'Bakım, teşhis ve tedavi sürecine ilişkin ekipmanın yetersizliği' },
            { name: 'Bilgi ağındaki güvenlik açığı sebebi ile hasta verilerinin çalınması' },
            { name: 'Bilgi ağındaki güvenlik açığı sebebi ile hasta bilgilerinde veri kaybının gerçekleşmesi' },
            { name: 'Cihaz arızası nedeni ile hastanın zarar görmesi' },
            { name: 'Cihaz kalibrasyon ve/veya testlerinin zamanında yapılmaması' },
            { name: 'Hareket kısıtlama ekipmanının hastaya zarar vermesi' },
            { name: 'Hasta şikayet ve geribildirimlerinin değerlendirilmemesi' },
            { name: 'Hastanın düşmesi' },
            { name: 'İç güvenlik raporlama bildirimlerinin değerlendirilmemesi' },
            { name: 'Sentinel olay bildirimlerine zamanında müdahale edilmemesi' },
            { name: 'Tesiste sentinel olay veya iç güvenlik raporlama sistemlerinin bulunmaması' }
          ]
        },
        {
          name: 'Hasta/Refakatçi Kaynaklı Hatalar',
          details: [
            { name: 'Ciddi yaralanma veya ölümle sonuçlanan intihar girişimi' },
            { name: 'Hastanın düşmesi' },
            { name: 'Hastanın veya refakatçilerin, kendilerine verilmesi zorunlu eğitimleri reddetmeleri/dinlememeleri' },
            { name: 'Hastanın, ameliyat öncesi gereklilikleri yerine getirmemesi' },
            { name: 'Hastanın, ilgili personele sağlık geçmişi hakkında eksik/yanıltıcı bilgi vermesi' },
            { name: 'Hastanın, sağlık durumu nedeni ile diğer hastalara zarar vermesi' },
            { name: 'Hastanın, sağlık personelinin bilgisi dışında ilaç/nutrisyon/gıda takviyesi kullanması' },
            { name: 'Hastanın, sağlık personelinin bilgisi dışında kimlik tanımlayıcısını çıkarması/değiştirmesi' },
            { name: 'Hastanın, sağlık personelinin bilgisi dışında sağlık tesisinden ayrılması' },
            { name: 'Hastanın, sağlık personelinin bilgisi dışında yatağını değiştirmesi' },
            { name: 'Hastanın, taburcu sonrası bakım/tedavi yönergelerine uymaması' },
            { name: 'Hastanın, taburcu sonrası kontrole gelmemesi' },
            { name: 'Hastanın, yatış sürecinde bakım/tedavi yönergelerine uymaması' },
            { name: 'Taburcu sonrası 3. seviye üstü bası ülseri oluşumu' }
          ]
        },
        {
          name: 'İletişim Hataları',
          details: [
            { name: 'Hastanın uygulanan bakım, teşhis metodu veya tedavi konusunda bilgilendirilmemesi' },
            { name: 'Hastanın uygulanan bakım, teşhis metodu veya tedavi konusunda hatalı/eksik bilgilendirilmesi' },
            { name: 'Taburcu sonrası bakım ve tedavi' }
          ]
        },
        {
          name: 'Kan ve Kan Ürünlerinin Transfüzyonuna İlişkin Hatalar',
          details: [
            { name: 'Hasta kimliğinin doğrulanmaması' },
            { name: 'Kan ürününün birime hatalı transferi' },
            { name: 'Kan ürününün hatalı uygulanması' },
            { name: 'Süreç öncesi ve sonrasında hasta gözleminin uygun olarak yapılmaması' },
            { name: 'Transfüzyon istemine ilişkin kayıtlarda eksiklik bulunması' },
            { name: 'Ürün bilgilerinin kontrol edilmemesi (Kan grubu, Cross -match, SKT, Testler vb.)' },
            { name: 'Ürünün etiket bilgilerinin hatalı olması' }
          ]
        },
        {
          name: 'Nütrisyona İlişkin Hatalar',
          details: [
            { name: 'Bakım kaynaklı TPN kateter enfeksiyonu oluşması' },
            { name: 'Gıda zehirlenmesi' },
            { name: 'Hasta için hatalı nütrisyon desteği veya diyet seçimi' },
            { name: 'Hastanın gıda alerji öyküsünün sorgulanmaması' },
            { name: 'Hastanın nütrisyon durumunun değerlendirilmemesi' },
            { name: 'Hastaya tesis dışından yemek/gıda getirilmesi' },
            { name: 'Hastaya yanlış yemeğin verilmesi' },
            { name: 'PN süspansiyonunun yanlış hastaya verilmesi' },
            { name: 'PN süspansiyonunun yanlış hazırlanması' },
            { name: 'PN süspansiyonunun yanlış muhafazası' },
            { name: 'PN süspansiyonunun yanlış uygulanması' },
            { name: 'Taburculukta hastaya nütrisyon konusunda bilgi verilmemesi' },
            { name: 'Tedavi sürecinde hastanın aşırı beslenmesi' },
            { name: 'Tedavi sürecinde hastanın yetersiz beslenmesi' }
          ]
        },
        {
          name: 'Tıbbi Kayıt ve Klinik Değerlendirme Hataları',
          details: [
            { name: 'Değerlendirme/konsültasyon notlarının eksik/hatalı olması' },
            { name: 'Değerlendirme/konsültasyon notlarının notlarının okunaksız olması' },
            { name: 'Hastanın temel bilgilerinin yanlış kaybedilmesi' },
            { name: 'Hastanın yanlış kimliklendirilmesi' },
            { name: 'Hastaya yanlış kişiye ait reçetenin verilmesi' },
            { name: 'Yapılan bakım/tedavinin tıbbi kayıtlara hatalı işlenmesi' },
            { name: 'Yenidoğanın yanlış kişiye teslimi' }
          ]
        }
      ]
    },
    {
      name: 'İlaç Güvenliği',
      locations: [
        { name: 'Acil Servis' },
        { name: 'Açık Klinik' },
        { name: 'Amatem' },
        { name: 'Ameliyathane' },
        { name: 'Cerrahi Klinik' },
        { name: 'Eczane' },
        { name: 'Pembe Klinik' },
        { name: 'Turkuaz Klinik' },
        { name: 'Turuncu Klinik' },
        { name: 'Yoğun Bakım' }
      ],
      occupationalGroups: [
        { name: 'Acil Tıp Teknisyeni/Teknikeri' },
        { name: 'Asistan' },
        { name: 'Eczacı' },
        { name: 'Eczane Teknisyeni' },
        { name: 'Hasta' },
        { name: 'Hemşire' },
        { name: 'Kişiden Kaynaklanmayan Hata' },
        { name: 'Uzman Hekim' }
      ],
      incorrectOperations: [
        {
          name: 'Hazırlama',
          details: [
            { name: 'Bozulmuş ilaç uygulanması' },
            { name: 'Doktor istemi dışında ilaç uygulanması' },
            { name: 'Doktor isteminin yanlış yorumlanması' },
            { name: 'El hijyeni uygulanmaması' },
            { name: 'Hasta başında ilaç bulundurulması' },
            { name: 'Hastanın yanında getirdiği ilaçların tanımlanmaması' },
            { name: 'Hazırlanan ilaçların yanlış etiketlenmesi' },
            { name: 'İlacın kullanımı hakkında hasta bilgi verilmemesi' },
            { name: 'İlacın kullanımı hakkında hastaya yanlış bilgi verilmesi' },
            { name: 'İlacın yanlış teknik ile hazırlanması' },
            { name: 'İlaç geçimsizliği' },
            { name: 'İlaçların yanlış etiketlenmesi' },
            { name: 'İlaçların yanlış paketlenmesi' },
            { name: 'Yanlış ilaç hazırlanması' },
            { name: 'Yazılışı, okunuşu, görünümü benzer ilaçların karışması' },
            { name: 'Yetki dışında ilaç uygulanması' }
          ]
        },
        {
          name: 'İstem',
          details: [
            { name: 'Elektronik ortamda yanlış ilaç seçimi' },
            { name: 'Hatalı doz istemi' },
            { name: 'İlaç adında kısaltma kullanımı' },
            { name: 'İletişim eksikliği' },
            { name: 'Kontrendike ilaç yazılması' },
            { name: 'Okunaksız el yazısı' },
            { name: 'Sözel istemin yanlış anlaşılması' },
            { name: 'Sözel istemin yazılı hale getirilmemesi' },
            { name: 'Yanlış ilaç istemi' },
            { name: 'Yanlış tedavi yazılması' }
          ]
        },
        {
          name: 'Muhafaza',
          details: [
            { name: 'Işık maruziyeti' },
            { name: 'İlacın çalınması' },
            { name: 'İlacın kaybolması' },
            { name: 'İlk gelen ilk çıkar (FIFO) kuralı ihlali' },
            { name: 'Kritik stock seviyesinin hatalı kontrolü' },
            { name: 'Miadı dolmuş ilaç' },
            { name: 'Miat ve kritik stok seviyesi uyarı sisteminin hatalı olması' },
            { name: 'Pediatrik dozdaki ilaçların diğer ilaçlar ile aynı rafta olması' },
            { name: 'Psikotrop ve narkotik ilaçların tanımlanmaması' },
            { name: 'Sıcaklık ve nem uygunsuzluğu' },
            { name: 'Yazılışı, okunuşu, görünümü benzer ilaçların karışması' },
            { name: 'Yüksek riskli ilaçların tanımlanmaması' }
          ]
        },
        {
          name: 'Transfer',
          details: [
            { name: 'Eczaneden yanlış ilacın transferi' },
            { name: 'Hazır ilaçların yanlış hastaya gönderilmesi' },
            { name: 'İlaçların hastaya/birime zamanında gönderilmemesi' },
            { name: 'İlaçların yanlış birime gönderilmesi' },
            { name: 'Yanlış zamanda ilaç dağıtılması' }
          ]
        },
        {
          name: 'Uygulama',
          details: [
            { name: 'Doz atlama' },
            { name: 'El hijyeni uygulanmaması' },
            { name: 'Geçimsiz ilaçların aynı anda uygulanması' },
            { name: 'Mükerrer ilaç verme' },
            { name: 'Sterilizasyon/dezenfeksion kurallarına uyulmaması' },
            { name: 'Yanlış doz (Aşırı)' },
            { name: 'Yanlış doz (Yetersiz)' },
            { name: 'Yanlış farmasötik form' },
            { name: 'Yanlış hasta' },
            { name: 'Yanlış ilaç' },
            { name: 'Yanlış teknik' },
            { name: 'Yanlış uygulama süresi (Enjeksiyon)' },
            { name: 'Yanlış uygulama süresi (İnfüzyon)' },
            { name: 'Yanlış zaman' }
          ]
        },
        {
          name: 'Uygulama Sonrası',
          details: [
            { name: 'Advers etki (Bildirim yapılmaması)' },
            { name: 'Advers etki (Yönetiminin tamamlanmaması)' },
            { name: 'İade edilen ilaçların orijinal ambalajının bozulmuş olması' },
            { name: 'İlaç uygulama sonrası atıkların ortamdan uzaklaştırılmaması' },
            { name: 'İlaç uygulama sonrası gözlem yapılmaması' },
            { name: 'İlaç uygulamasının kayıt altına alınmaması' },
            { name: 'İlaç uygulanması sonrası el hijyeni uygulanmaması' },
            { name: 'İlaç-ilaç, ilaç-besin etkileşiminin gözlenmemesi' }
          ]
        }
      ]
    },
    {
      name: 'Laboratuvar Güvenliği',
      locations: [
        { name: 'Acil Servis' },
        { name: 'Açık Klinik' },
        { name: 'Amatem' },
        { name: 'Ameliyathane' },
        { name: 'Cerrahi Klinik' },
        { name: 'Kan Alma Ünitesi' },
        { name: 'Laboratuvar' },
        { name: 'Numune Kabul Birimi' },
        { name: 'Pembe Klinik' },
        { name: 'Poliklinik' },
        { name: 'Turkuaz Klinik' },
        { name: 'Turuncu Klinik' },
        { name: 'Yoğun Bakım Ünitesi' }
      ],
      occupationalGroups: [
        { name: 'Acil Tıp Teknisyeni/Teknikeri' },
        { name: 'Doktor' },
        { name: 'Hasta' },
        { name: 'Hemşire' },
        { name: 'Kişiden Kaynaklanmayan Hata' },
        { name: 'Porter' },
        { name: 'Teknisyen' }
      ],
      incorrectOperations: [
        {
          name: 'Analitik',
          details: [
            { name: 'Cihaz arızası' },
            { name: 'Cihaz pipetasyon hatası' },
            { name: 'Dış kalite kontrol çalışmalarında uygunsuzluk' },
            { name: 'Ekim hataları' },
            { name: 'Hatalı teknik onay' },
            { name: 'İç kalite kontrol çalışılmaması' },
            { name: 'Numunenin yetersiz homojenizasyonu' },
            { name: 'Otomasyon arızası' },
            { name: 'Sonucun yanlış değerlendirilmesi' },
            { name: 'Test çalışma prosedürlerine uyulmaması' },
            { name: 'Uygunsuz boyama tekniği' },
            { name: 'Uygunsuz dilüsyon' },
            { name: 'Uygunsuz inkübasyon sıcaklığı' },
            { name: 'Uygunsuz inkübasyon süresi' },
            { name: 'Uygunsuz kalite kontrol sonucu ile çalışılması' },
            { name: 'Uygunsuz solüsyon kullanılması' }
          ]
        },
        {
          name: 'Postanalitik',
          details: [
            { name: 'Hasta raporlarının kaybedilmesi' },
            { name: 'Hatalı Kayıt' },
            { name: 'Hatalı rapor' },
            { name: 'Otomasyon arızası' },
            { name: 'Panik değerin geç bildirilmesi' },
            { name: 'Sonuçların sisteme hatalı girilmesi' },
            { name: 'Zamanında verilmeyen sonuç' }
          ]
        },
        {
          name: 'Preanalitik',
          details: [
            { name: 'Barkodsuz numune' },
            { name: 'Belirlenen maksimum numune transfer süresinin aşılması' },
            { name: 'Besiyerinin uygun hazırlanmaması' },
            { name: 'Boş numune kabı/tüpü (içinde numune yok)' },
            { name: 'Cihaz bakımlarının yapılmaması' },
            { name: 'Hastadan numune alınamaması nedeni ile kaydın iptal edilmesi' },
            { name: 'Hatalı kayıt' },
            { name: 'Hatalı kimliklendirilmiş numune' },
            { name: 'Hatalı numune kabı/tüpü (içinde numune yok)' },
            { name: 'Hatalı test istemi' },
            { name: 'Hemolizli numune' },
            { name: 'İkterik numune' },
            { name: 'İsteği yapılan malzeme/kit gelmemesi' },
            { name: 'Kaybolan numune' },
            { name: 'Kayıtsız numune' },
            { name: 'Laboratuvar ortam ısısının uygunsuzluğu' },
            { name: 'Laboratuvarda teslim edilmeyen numune' },
            { name: 'Lipemik numune' },
            { name: 'Malzemenin transferinin uygun şartlarda yapılmaması' },
            { name: 'Malzemenin uygun koşullarda saklanmaması' },
            { name: 'Miadı geçmiş kit tespiti' },
            { name: 'Miadı geçmiş malzeme tespiti' },
            { name: 'Numune alma zamanının kaydedilmemesi' },
            { name: 'Numunelerin karışması' },
            { name: 'Numunenin fiksatif içinde gönderilmemesi' },
            { name: 'Otomasyon arızası' },
            { name: 'Patoloji istek formunun düzenlenmemesi' },
            { name: 'Pıhtılı numune' },
            { name: 'Reddedilmesi gereken numunenin kabulü' },
            { name: 'Son kullanma tarihi geçmiş tüplere numune alınması' },
            { name: 'Tekrar alınan numune' },
            { name: 'Test isteminde eksik/yanlış bilgi' },
            { name: 'Uygunsuz alınmış numune' },
            { name: 'Uygunsuz saklanmış numune' },
            { name: 'Uygunsuz transfer koşulları' },
            { name: 'Yanlış hastadan numune alınması' },
            { name: 'Yanlış malzeme/kit gelmesi' },
            { name: 'Yetersiz numune' }
          ]
        }
      ]
    }
  ],
  timeIntervals: [
    { text: '00:00-04:00' },
    { text: '04:01-08:00' },
    { text: '08:01-12:00' },
    { text: '12:01-16:00' },
    { text: '16:01-20:00' },
    { text: '20:01-23:59' }
  ]
}
