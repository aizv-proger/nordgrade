export default function NordGradeLanding() {
  return (
    <div className="min-h-screen bg-[#F3F3F0] text-[#1D1F1D] font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="max-w-[1440px] mx-auto px-10 pt-8 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="sandbox:/mnt/data/nordgrade_logo_transparent.png"
            alt="NordGrade"
            className="h-16 object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] text-black/65">
          <a href="#">Как это работает</a>
          <a href="#">Услуги</a>
          <a href="#">Примеры работ</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>

        <div className="flex items-center gap-8">
          <div className="font-semibold text-[15px]">
            +7 (921) 123-45-67
          </div>

          <button className="bg-lime-500 hover:bg-lime-400 transition-all text-white font-semibold px-7 py-4 rounded-xl shadow-lg shadow-lime-500/20">
            Получить расчет
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-[1440px] mx-auto px-10 pt-4 pb-10 relative">
        <div className="grid grid-cols-[1fr_560px] gap-0 min-h-[760px]">
          {/* LEFT */}
          <div className="pt-20 max-w-[720px]">
            <div className="text-lime-600 uppercase tracking-[0.25em] text-sm font-medium mb-8">
              Благоустройство участков под ключ
            </div>

            <h1 className="text-[82px] leading-[0.92] tracking-[-0.06em] font-semibold mb-8 text-[#1F2421]">
              Подберем лучшее
              решение для
              вашего <span className="text-lime-500">участка</span>
            </h1>

            <p className="text-[24px] leading-[1.6] text-black/45 max-w-[620px] mb-16 font-light">
              Подбираем проверенных подрядчиков и рассчитываем
              стоимость работ с учетом особенностей вашего участка
            </p>

            <div className="grid grid-cols-3 gap-10 max-w-[760px] mb-14">
              {[
                ["Проверенные подрядчики", "Работаем только с надежными компаниями"],
                ["Быстрый расчет", "Рассчитаем стоимость работ за 5 минут"],
                ["Честные цены", "Рыночные цены без скрытых наценок"]
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-12 h-12 rounded-2xl border border-lime-200 bg-white flex items-center justify-center mb-5 shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-lime-500" />
                  </div>

                  <div className="font-semibold text-[17px] mb-2 leading-snug">
                    {item[0]}
                  </div>

                  <div className="text-black/45 text-sm leading-relaxed">
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-black/10 border-2 border-[#F3F3F0]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 text-[15px]">
                <div className="text-lime-500">★★★★★</div>
                <div className="font-semibold">4.9</div>
                <div className="text-black/45">
                  Более 250 довольных клиентов
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[760px]">
            <div className="absolute right-[-70px] top-0 w-[720px] h-[760px] rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.10)]">
              <img
                src="sandbox:/mnt/data/a_photorealistic_high_resolution_outdoor_twilight.png"
                alt="House"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CALCULATOR */}
            <div className="absolute left-[-70px] top-[90px] w-[470px] rounded-[34px] overflow-hidden bg-[#171A1D] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.25)] text-white">
              <div className="p-9">
                <div className="mb-8">
                  <h2 className="text-[40px] leading-[1.04] tracking-[-0.04em] font-semibold mb-3">
                    Рассчитайте стоимость
                  </h2>

                  <p className="text-white/45 text-[15px]">
                    Ответьте на 5 вопросов и получите расчет
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-white/45 mb-3">
                    <span>Шаг 1 из 5</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[40%] h-full bg-lime-500 rounded-full" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/45 mb-2">
                      Площадь участка, соток
                    </label>

                    <input
                      placeholder="Например: 10"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/45 mb-2">
                      Тип работ
                    </label>

                    <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/60 outline-none">
                      <option>Выберите тип работ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/45 mb-2">
                      Населенный пункт
                    </label>

                    <input
                      placeholder="Например: Всеволожск"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none placeholder:text-white/20"
                    />
                  </div>

                  <button className="w-full bg-lime-500 hover:bg-lime-400 transition-all rounded-2xl py-5 text-black font-semibold text-lg mt-3">
                    Далее →
                  </button>
                </div>

                <div className="mt-6 text-xs text-white/35">
                  Ваши данные защищены и не передаются третьим лицам
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-[1440px] mx-auto px-10 pb-10">
        <div className="bg-white/50 rounded-[34px] border border-black/5 p-10 backdrop-blur-sm shadow-sm grid grid-cols-[1fr_420px] gap-8">
          <div>
            <h2 className="text-[42px] font-semibold mb-10">
              Почему выбирают NordGrade
            </h2>

            <div className="grid grid-cols-3 gap-5">
              {[
                "Комплексный подход",
                "Учитываем особенности участка",
                "Оптимальные решения",
                "Экономия времени",
                "Прозрачность",
                "Гарантия качества"
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] p-7 border border-black/5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-lime-100 mb-5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-lime-500" />
                  </div>

                  <div className="font-semibold leading-snug mb-2">
                    {item}
                  </div>

                  <div className="text-black/45 text-sm leading-relaxed">
                    Подбираем лучшее решение под ваш участок.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[30px] overflow-hidden bg-[#171A1D] text-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <div className="text-[34px] font-semibold mb-8">
              Пример расчета
            </div>

            <div className="text-white/70 text-lg leading-relaxed mb-10">
              Участок 12 соток, выравнивание,
              дренаж, отсыпка, планировка
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/45">Сроки выполнения</span>
                <span className="font-semibold">10–14 дней</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/45">Стоимость работ</span>
                <span className="font-semibold text-lime-400">от 340 000 ₽</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/45">Экономия времени</span>
                <span className="font-semibold text-lime-400">до 10 часов</span>
              </div>
            </div>

            <button className="w-full border border-lime-500 text-lime-400 rounded-2xl py-5 font-medium hover:bg-lime-500 hover:text-black transition-all">
              Получить такой расчет
            </button>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="max-w-[1440px] mx-auto px-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-[52px] font-semibold mb-4">
            Как это работает
          </h2>

          <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[
            "Заполните анкету",
            "Мы анализируем данные",
            "Подбираем подрядчиков",
            "Вы получаете расчет"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/40 rounded-[28px] border border-black/5 p-8 min-h-[240px]"
            >
              <div className="w-11 h-11 rounded-full bg-lime-500 text-black font-semibold flex items-center justify-center mb-8">
                {i + 1}
              </div>

              <div className="font-semibold text-[24px] leading-snug mb-4">
                {item}
              </div>

              <div className="text-black/45 leading-relaxed text-sm">
                Подбираем оптимальное решение для вашего участка.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-10 pb-20">
        <div className="grid grid-cols-2 rounded-[38px] overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.12)] border border-black/5 bg-[#171A1D] text-white">
          <div className="p-14 flex flex-col justify-center">
            <h2 className="text-[56px] leading-[1] font-semibold mb-8">
              Готовы начать?
            </h2>

            <p className="text-white/65 text-xl leading-relaxed mb-10 max-w-[420px]">
              Получите бесплатный расчет стоимости для вашего участка
            </p>

            <div className="space-y-4 mb-10 text-white/70">
              <div>✓ Бесплатно и без обязательств</div>
              <div>✓ Расчет за 5 минут</div>
            </div>

            <button className="w-fit bg-lime-500 hover:bg-lime-400 transition-all text-black font-semibold px-8 py-5 rounded-2xl text-lg">
              Получить расчет →
            </button>
          </div>

          <div className="min-h-[480px] overflow-hidden">
            <img
              src="sandbox:/mnt/data/a_wide_high_resolution_outdoor_construction_site.png"
              alt="Excavator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
