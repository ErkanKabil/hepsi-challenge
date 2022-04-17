Projeyi çalıştırmak için aşağıdaki komut kullanılmaktadır.

```bash
npm run dev
# or
yarn dev
```

## Eslint

Yazılan kodların belli kurallara göre analiz edilmesini sağlamaktadır. 

## Test

Projede unit test yazılıdır. Testten geçip geçmediğini `npm run test ` diyerek kontrol edebilirsiniz. 

## Development

-   Proje içerisinde ortak kullanılan dosyalar core klasörü altındadır. Değişiklikler ilgili klasörde/dosyada yapılmalıdır.

    - Fonksiyonlar: utils
    - Sayfa urlleri: routes/index.js
    - Genel type tanımları: constants
    - Redux yönetimi: redux
    - Hooklar: hooks
    - Global style: styles
    - Test: tests
