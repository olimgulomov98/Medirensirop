

export default function Home() {
  return (
    <>
      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        <div className="h-[80px] flex items-center justify-between">
          <a href="#">
            <img
              height={50}
              width={100}
              className={"block md:hidden"}
              src="/mediren-logo.svg"
              alt="mediren"
              loading={"lazy"}
            />
            <img
              width={250}
              height={200}
              className={"hidden md:block"}
              src="/mediren-logo.svg"
              alt="mediren"
              loading={"lazy"}
            />
          </a>
          <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel: +998 99 694 23 63
          </h3>
        </div>
        <div className="mt-[50px]">
          <h2 className="font-semibold text-center text-4xl font-roboto">
            « МЕДИРЕН ® »
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
            <img
              height={600}
              width={600}
              className="hidden md:block"
              src="/mediren.webp"
              alt="Медирен сироп 100мл - фитопрепарат для почек и мочевыводящих путей"
              loading={"lazy"}
            />
            {/* <img
              height={600}
              width={600}
              className="hidden md:block w-[500px] h-[500px]"
              src="/mediren.webp"
              alt="Медирен сироп"
              loading={"lazy"}
            /> */}
            <img
              height={300}
              width={300}
              className="block md:hidden"
              src="/mediren.webp"
              alt="Медирен сироп 100мл - фитопрепарат для почек и мочевыводящих путей"
              loading={"lazy"}
            />

            {/*<img*/}
            {/*    className="h:[50vh] md:h-[60vh]"*/}
            {/*    src="/Invirep.webp"*/}
            {/*    alt="invirep, ИНВИРЕП"/>*/}
          </div>
          <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
            ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ
          </h3>
          <div className="text-[14px] md:text-[16px] font-roboto font-light">
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">МЕДИРЕН</span>® сироп 100мл
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Торговое название: </span>{" "}
                МЕДИРЕН®
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Лекарственная форма: </span>{" "}
                сироп
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Форма выпуска, упаковка и состав препарата Медирен®
                </span>{" "}
              </strong>
            </div>
            <div className="mb-4">
              <p className="font-medium">
                Капли для приема внутрь в виде прозрачной или слегка мутной
                жидкости желтовато-коричневого цвета, с характерным запахом;
                возможна опалесценция (помутнение) и образование небольшого
                осадка в процессе хранения.
              </p>
            </div>
            <div className="mb-4">
              <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-slate-300 px-3 py-2 text-left" />
                    <th className="border border-slate-300 px-3 py-2 text-center">
                      1 мл
                      <br />
                      (соответствует 0.98 г)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      жидкий экстракт (1:56) золототысячника травы (Centaurii
                      herba) : любистока лекарственного корней (Levistici
                      officinalis radices) : розмарина обыкновенного листьев
                      (Rosmarini officinalis folia) (1:1:1)
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center align-middle">
                      976 мг
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-medium">
                Экстрагенты: этанол 59%, вода очищенная.
              </p>
              <p className="mt-2 font-medium">
                Содержание этанола: 16.0–19.5% (об/об).
              </p>
              <p className="mt-2 font-medium">
                100 мл – флаконы темного стекла (1) с дозирующим капельным
                устройством сверху – пачки картонные. На флакон наклеивают
                самоклеящуюся этикетку.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Группа: </span>
                <span className="underline">
                  Фитопрепарат, применяемый при заболеваниях почек и
                  мочевыводящих путей
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Терапевтическая группа: </span>
                <span className="underline">
                  Средства, применяемые в урологии; другие средства, применяемые
                  в урологии.
                </span>
              </strong>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Действие</span>
              </strong>
              <p className="mt-2 font-medium">
                Механизм действия и свойства Медирен® сироп, соответствует
                совокупно указанным, аналогичным действующим веществам,
                указанным информацией справочника лекарственных средств Видаль.
                Комбинированный препарат растительного происхождения, оказывает
                мочегонное, спазмолитическое, противовоспалительное,
                противомикробное действие.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Показания препарата Медирен®
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Для применения у взрослых и детей в возрасте от 1 года до 18 лет
                в комплексной терапии:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                <li>
                  острых и хронических инфекций мочевого пузыря (цистита);
                </li>
                <li>
                  при инфекционном и неинфекционном хроническом воспалении почек
                  (пиелонефрит, гломерулонефрит, интерстициальный нефрит);
                </li>
                <li>
                  в качестве средства, препятствующего образованию мочевых
                  камней (также после удаления мочевых камней).
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Режим дозирования</span>
              </strong>
              <p className="mt-2 font-medium">
                Рекомендуется принимать 3 раза/день (утром, днем и вечером) в
                соответствии с приведенной ниже таблицей.
              </p>
              <table className="border-collapse border border-slate-300 w-full mt-3 mb-3 text-[14px]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-slate-300 px-3 py-2 text-left">
                      Возраст
                    </th>
                    <th className="border border-slate-300 px-3 py-2 text-center">
                      Разовая доза
                    </th>
                    <th className="border border-slate-300 px-3 py-2 text-center">
                      Суточная доза
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Дети в возрасте 1–5 лет
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      15 капель
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      45 капель
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Дети в возрасте 6–11 лет
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      25 капель
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      75 капель
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Подростки в возрасте 12 лет и старше, взрослые
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      50 капель
                    </td>
                    <td className="border border-slate-300 px-3 py-2 text-center">
                      150 капель
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-medium">
                50 капель соответствуют 3.3 мл препарата.
              </p>
              <p className="mt-2 font-medium">
                Длительность курса лечения зависит от течения заболевания. После
                наступления улучшения (завершения острой фазы заболевания)
                следует продолжить лечение препаратом в течение 2–4 недель.
                Увеличение продолжительности и проведение повторных курсов
                лечения возможно по рекомендациям врача.
              </p>
              <p className="mt-2 font-medium">
                <strong>Дети.</strong> Безопасность и эффективность у детей в
                возрасте от 0 до 1 года на настоящий момент не установлены.
                Данные отсутствуют.
              </p>
              <p className="mt-2 font-medium">
                <strong>Способ применения.</strong> Препарат Медирен® принимают
                внутрь, независимо от приема пищи.
              </p>
              <p className="mt-2 font-medium">
                <strong>Перед применением взбалтывать.</strong>
              </p>
              <p className="mt-2 font-medium">
                Необходимую дозу отмеряют при помощи флакона с дозирующим
                капельным устройством. Флакон следует держать вертикально при
                дозировании препарата. При необходимости (например, чтобы
                смягчить горький вкус для детей) препарат можно запить небольшим
                количеством воды (например, 1 стакан). Во время лечения
                препаратом рекомендуется достаточное потребление жидкости.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Побочное действие</span>
              </strong>
              <p className="mt-2 font-medium">
                <span className="font-medium">Со стороны ЖКТ:</span> часто –
                тошнота, рвота, диарея.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-medium">
                  Со стороны иммунной системы:
                </span>{" "}
                частота неизвестна – аллергические реакции. При появлении первых
                признаков аллергической реакции следует прекратить прием
                препарата и обратиться к врачу; при появлении побочных эффектов,
                указанных в инструкции, или их усугублении, или появлении любых
                других побочных эффектов, не указанных в инструкции, необходимо
                обратиться к врачу.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Противопоказания к применению
                </span>
              </strong>
              <ul className="list-disc pl-6 mt-2 space-y-1 font-medium">
                <li>
                  повышенная чувствительность к активным веществам препарата, к
                  другим растениям семейства зонтичные (например, анис,
                  фенхель), анетолу (компонент эфирных масел), и/или к любому из
                  вспомогательных веществ, входящих в состав препарата;
                </li>
                <li>
                  заболевания желудочно-кишечного тракта в фазе обострения (в
                  т.ч. гастрит, язвенная болезнь желудка).
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Применение при беременности и кормлении грудью
                </span>
              </strong>
              <p className="mt-2 font-medium">
                <span className="font-semibold">Беременность.</span> Применение
                препарата во время беременности возможно только по назначению
                врача, в случае если предполагаемая польза для матери превышает
                потенциальный риск для плода и ребенка.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-semibold">
                  Период грудного вскармливания.
                </span>{" "}
                Применение препарата в период грудного вскармливания возможно
                только по назначению врача, в случае если предполагаемая польза
                для матери превышает потенциальный риск для ребенка.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-semibold">Фертильность.</span> Данные о
                влиянии препарата Медирен® на фертильность у людей отсутствуют.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Применение у детей</span>
              </strong>
              <p className="mt-2 font-medium">
                Противопоказано применение препарата в детском возрасте до 1
                года.
              </p>
              <p className="mt-2 font-medium">
                С осторожностью следует назначать препарат детям старше 1 года
                (применение возможно только после консультации с врачом) – в
                связи с содержанием этанола.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Особые указания</span>
              </strong>
              <p className="mt-2 font-medium">
                Если симптомы заболевания сохраняются, ухудшаются, повторяются
                периодически или появляются новые симптомы, необходимо
                обратиться за консультацией к врачу. Необходимо проинформировать
                пациента, что в случае воспалительных заболеваний почек,
                появления лихорадки, спазмов, крови в моче, нарушений
                мочеиспускания, острой задержки мочи, болей при мочеиспускании
                необходимо обратиться к врачу.
              </p>
              <p className="mt-2 font-medium">
                При отеках, вызванных нарушениями функции сердца или почек,
                потребление большого количества жидкости противопоказано.
              </p>
              <p className="mt-2 font-medium">
                В процессе хранения возможна опалесценция и образование
                небольшого осадка, что не влияет на качество и эффективность
                препарата.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-semibold">Вспомогательные вещества.</span>{" "}
                Препарат Медирен® содержит от 16.0 до 19.5% (в объемном
                отношении) этанола, т.е. до 500 мг на максимальную разовую дозу
                (50 капель), что соответствует 13 мл пива или 5 мл вина и до 150
                мг на минимальную разовую дозу (15 капель), что соответствует 4
                мл пива или 2 мл вина.
              </p>
              <p className="mt-2 font-medium">
                Содержание этанола в максимальной суточной дозе (50 капель 3
                раза в день) составляет 1.5 г. Вследствие наличия этанола не
                рекомендуется назначать препарат при алкоголизме, а также после
                лечения алкогольной зависимости. Содержание этанола в препарате
                следует принимать во внимание беременным или кормящим женщинам,
                детям и группам высокого риска, таким как пациенты с
                заболеваниями печени и эпилепсией, с заболеваниями и травмами
                головного мозга.
              </p>
              <p className="mt-2 font-medium">
                <span className="font-semibold">
                  Влияние на способность к управлению транспортными средствами и
                  механизмами.
                </span>{" "}
                При приеме в рекомендуемых дозах препарат Медирен® не оказывает
                влияния на способность к выполнению потенциально опасных видов
                деятельности, требующих повышенной концентрации внимания и
                быстроты психомоторных реакций (управление транспортными
                средствами и механизмами, работа диспетчера, оператора).
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Передозировка</span>
              </strong>
              <p className="mt-2 font-medium">
                При передозировке возможно усиление выраженности дозозависимых
                нежелательных реакций.
              </p>
              <p className="mt-1 font-medium">
                <strong>Лечение:</strong> симптоматическое.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Лекарственное взаимодействие
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Комбинация с антибактериальными средствами возможна и
                целесообразна. Исследования взаимодействия с другими
                лекарственными препаратами не проводились.
              </p>
            </div>

            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Условия хранения препарата
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Препарат следует хранить в оригинальной упаковке (флаконе) для
                защиты от света, в недоступном для детей месте. Препарат следует
                хранить при температуре не выше 25°С.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Срок годности препарата</span>
              </strong>
              <p className="mt-2 font-medium">
                Срок годности - 2 года. Не использовать по истечении срока
                годности, указанного на упаковке.
                <br />
                Открытый флакон можно использовать в течение 6 месяцев.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Условия реализации</span>
              </strong>
              <p className="mt-2 font-medium">
                Препарат отпускают без рецепта.
              </p>
            </div>
            <div className="mb-4 mt-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">Производитель:</span>
              </strong>
              <p className="mt-2 font-medium">
                ООО &quot;SPRING PHARMACEUTIC&quot; СП Великобритания.
              </p>
            </div>
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Местонахождение производителя и адрес места осуществления
                  деятельности:
                </span>
              </strong>
              <p className="mt-2 font-medium">
                Республика Узбекистан, Наманганская область, Касансайский район,
                Кукимбой, Навбахор МСГ, улица Булак, дом 129.
                <br />
                Тел.: +998996942363
              </p>
            </div>

            <a
              href="https://www.instagram.com/springpharmaceutic/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Instagram-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="instagram"
              />
              @springpharmaceutic
            </a>
            <a
              href="https://www.facebook.com/spring.pharm.3/"
              className="flex gap-3 items-center"
            >
              <img
                src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                loading={"lazy"}
                className="w-[30px] h-[30px]"
                alt="Facebook Spring Pharm"
              />
              Spring Pharm
            </a>
            <a
              href="https://t.me/SpringPharmaceutic"
              className="flex gap-3 items-center"
            >
              <img
                src="/telegram.webp"
                width={20}
                height={20}
                loading={"lazy"}
                className="w-[20px] h-[20px] ml-1"
                alt="Telegram Spring Pharmaceutic"
              />
              Spring_Pharmaceutic
            </a>
            <a href="#" className="flex gap-3 items-center mb-3">
              <img
                src="/email-svgrepo-com.svg"
                loading={"lazy"}
                className="w-[25px] h-[25px]"
                alt="Email Spring Pharmaceutic"
              />
              spring_pharmaceutic@gmail.com
            </a>
            <div className="mb-5 flex gap-3 flex flex-wrap">
              <a
                href="/instruction_ru.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
              {/* <a
                href="/instruction_uz.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ НА УЗБЕКСКОМ ЯЗЫКЕ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
