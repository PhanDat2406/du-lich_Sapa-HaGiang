# Design System: Travel Website (Tây Bắc)
**Project ID:** local-travel-website

## 1. Visual Theme & Atmosphere
Giao diện dự án mang phong cách hiện đại, linh hoạt và giàu cảm xúc. Tùy thuộc vào từng chủ đề, không gian thiết kế được thay đổi để tạo ra trải nghiệm sống động nhất nhưng vẫn giữ được sự cao cấp và tinh tế:
*   **Trang Điểm Đến:** Không gian rộng mở, hùng vĩ (Airy, Grand) với các dải ảnh tràn viền, hiệu ứng thẻ kính (glassmorphism) và gradient tối ở viền ảnh.
*   **Trang Văn Hóa:** Cảm giác mộc mạc, truyền thống (Earthy, Minimalist) với bố cục zic-zắc, khoảng trắng lớn và màu sắc mang âm hưởng thiên nhiên.
*   **Trang Ẩm Thực:** Kích thích thị giác, nổi bật (Vibrant, Dark Mode) sử dụng nền tối sâu thẳm làm nổi bật các sắc cam, đỏ của món ăn.
*   **Trang Cẩm Nang & Đánh Giá:** Sạch sẽ, đáng tin cậy (Clean, Bright) với đổ bóng mềm mại (soft shadows) giúp các luồng văn bản trở nên dễ đọc.

## 2. Color Palette & Roles
*   **Deep Slate/Navy** (`#0F172A`, `#2C3E50`): Màu chữ chính cho các tiêu đề (Headers), tạo sự tương phản mạnh, sắc nét và chuyên nghiệp.
*   **Warm Earth Brown** (`#5D4037`, `#8D6E63`): Sử dụng cho trang Văn Hóa, đại diện cho màu của đất, gỗ và sự hoài cổ.
*   **Vibrant Orange** (`#FF7043`): Điểm nhấn chính (Primary Action/Accent) cho trang ẩm thực và các nút kêu gọi hành động (Call to Action), tạo sự thèm ăn và năng động.
*   **Soft Trust Blue** (`#3B82F6`): Sử dụng ở các con số đếm, đánh dấu bước đi trong trang kinh nghiệm, tạo sự tin cậy.
*   **Midnight Black** (`#121212`, `#1E1E1E`): Nền tảng (Background) cho Dark Mode, giúp các thành phần nổi bật hơn.
*   **Cloud Gray / Whisper Slate** (`#F8FAFC`, `#E8ECEF`): Các dải màu nền siêu nhạt dùng để tách biệt các thẻ màu trắng (White Cards) mà không cần dùng đến viền cứng (borders).

## 3. Typography Rules
*   **Headers (Tiêu đề):** Sử dụng phông chữ Sans-serif (hoặc Georgia cho trang Văn hóa). Cỡ chữ lớn, in đậm (`font-weight: 800`), đối với tiêu đề chính (Hero) thường dùng `text-transform: uppercase` kết hợp `letter-spacing: 2-4px` để tăng phần trang trọng.
*   **Body (Nội dung):** Sử dụng các phông chữ hiện đại, tối giản như `Inter`, `Segoe UI`, hoặc `Arial`. Chiều cao dòng (Line-height) cực kỳ thoáng, từ `1.6` đến `1.8` để đảm bảo văn bản dài dễ đọc nhất.
*   **Accents/Tags:** Chữ nhỏ, in đậm, thường nằm trong các khối pill-shaped (Badge) để đánh dấu danh mục.

## 4. Component Stylings
*   **Cards/Containers (Thẻ nội dung):** 
    *   *Roundness (Độ bo góc):* Mức độ bo góc từ mềm mại đến rất lớn (`16px` đến `24px`) giúp UI thân thiện.
    *   *Elevation (Độ nổi):* Sử dụng bóng đổ siêu mềm và rộng (`box-shadow: 0 10px 40px rgba(0,0,0,0.03)`). Ở trạng thái Hover, bóng sẽ mở rộng và đậm hơn, thẻ trượt lên trên bằng CSS thuần (`transform: translateY(-10px)`).
    *   *Dark Mode Hover:* Các thẻ nền tối khi hover sẽ phát ra vầng sáng màu (VD: bóng đổ cam `rgba(255, 112, 67, 0.2)`).
*   **Images (Hình ảnh):** Luôn dùng `object-fit: cover` kết hợp với `transition` dài (0.5s - 0.7s) để ảnh zoom nhẹ (`transform: scale(1.1)`) khi người dùng tương tác, tạo cảm giác động (dynamic effect).
*   **Buttons & Badges:** Bo góc tròn tuyệt đối (Pill-shaped) cho các nhãn, và bo góc nhẹ (8px) cho các nút bấm tiêu chuẩn.

## 5. Layout Principles
*   **CSS Grid & Flexbox:** Áp dụng hệ thống lưới tự động thích ứng `grid-template-columns: repeat(auto-fit, minmax(...))` cho các trang danh sách (Điểm đến, Ẩm thực, Đánh giá) giúp responsive mượt mà mà không cần quá nhiều Media Queries.
*   **Spacing (Khoảng trắng):** Áp dụng chiến lược "Breathing Room". Padding các section cực kỳ rộng (từ `80px` đến `100px`). Khoảng cách (gap) giữa các thẻ từ `30px` đến `40px`.
*   **Rhythm & Alternation:** Trang Văn hóa và Lịch trình sử dụng bố cục xen kẽ trái-phải (`flex-direction: row-reverse` với phần tử chẵn) để tạo nhịp điệu sinh động cho đôi mắt khi cuộn trang, tránh sự nhàm chán. Mọi hiệu ứng hoàn toàn được thực thi bằng **CSS Thuần**, không phụ thuộc JS.
