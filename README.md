#Coding Challenge #4


## **Yêu cầu hệ thống**
- Node.js >= 22.17
- Yarn hoặc npm

## **Cài đặt**
Clone dự án về máy:
```bash
git clone https://github.com/thaibinhtes/fe-skipli
cd fe-skipli
```

## **Cài đặt dependencies**
```bash
yarn install
# hoặc
npm install
```

#Chạy dự án (Development)
```bash
yarn dev
# hoặc
npm run dev
```

## **Production**
```bash
yarn build
# hoặc
npm run build
```

## **Cấu trúc thư mục**
src/
  assets/        # Chứa file SCSS, ảnh, icon
  components/    # Component tái sử dụng
  pages/         # Các trang chính
  routes/        # Định nghĩa router
  services/      # Gọi API
  store/         # Zustand 
  types/         # Định nghĩa TypeScript types
  utils/         # Định nghĩa các function dùng global
  App.tsx
  main.tsx


