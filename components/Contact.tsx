export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf9f7] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-orange-500 font-medium mb-3 uppercase">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight mb-4">
            お問い合わせ
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-6" />
          <p className="text-sm text-gray-500">
            サービスに関するご質問・ご相談はお気軽にどうぞ。
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg border border-gray-100 p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  会社名 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-navy-400 transition-colors"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  お名前 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-navy-400 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">
                メールアドレス <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-navy-400 transition-colors"
                placeholder="info@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">
                ご興味のあるサービス
              </label>
              <div className="flex flex-wrap gap-3">
                {['ファネル構築', '法人向け研修', 'セミナープロデュース', 'その他'].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">
                お問い合わせ内容 <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-navy-400 transition-colors resize-none"
                placeholder="お気軽にご記入ください"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3.5 rounded text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
