import React from "react";

function Footer() {
  return (
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              class="text-lg font-semibold mb-4"
              _msttexthash="3070418"
              _msthash="103"
            >
              Liên hệ với chúng tôi
            </h3>
            <p class="text-gray-400" _msttexthash="14972529" _msthash="104">
              Thủ đô
              <br _istranslated="1" />
              Thái Dương Thành phố Hồ Chí Minh, Việt Nam
              <br _istranslated="1" />
              Email: info@thaiduongcapital.com
            </p>
          </div>
          <div>
            <h3
              class="text-lg font-semibold mb-4"
              _msttexthash="1431417"
              _msthash="105"
            >
              Liên kết nhanh
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  class="text-gray-400 hover:text-white"
                  href="/our-firm"
                  _msttexthash="1857518"
                  _msthash="106"
                >
                  Công ty của chúng tôi
                </a>
              </li>
              <li>
                <a
                  class="text-gray-400 hover:text-white"
                  href="/products-service"
                  _msttexthash="5899933"
                  _msthash="107"
                >
                  Sản phẩm &amp; Dịch vụ
                </a>
              </li>
              <li>
                <a
                  class="text-gray-400 hover:text-white"
                  href="/careers"
                  _msttexthash="2681653"
                  _msthash="108"
                >
                  Nghề nghiệp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-lg font-semibold mb-4"
              _msttexthash="925444"
              _msthash="109"
            >
              Hợp pháp
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  class="text-gray-400 hover:text-white"
                  href="/privacy-policy"
                  _msttexthash="4048109"
                  _msthash="110"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  class="text-gray-400 hover:text-white"
                  href="/terms-of-use"
                  _msttexthash="6278402"
                  _msthash="111"
                >
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            ©{" "}
            <font _mstmutation="1" _msttexthash="10545015" _msthash="112">
              2024 Thủ đô Thái Dương. Đã đăng ký Bản quyền.
            </font>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
