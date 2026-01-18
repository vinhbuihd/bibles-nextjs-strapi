// Nội dung mẫu một số chương Kinh Thánh
import { Chapter } from "./bible";

// Sáng Thế - Chương 1
const genesis1: Chapter = {
  bookId: "genesis",
  chapter: 1,
  verses: [
    { number: 1, text: "Lúc khởi đầu, Thiên Chúa sáng tạo trời đất." },
    { number: 2, text: "Đất còn trống rỗng, chưa có hình dạng, bóng tối bao trùm vực thẳm, và thần khí Thiên Chúa bay lượn trên mặt nước." },
    { number: 3, text: "Thiên Chúa phán: \"Phải có ánh sáng.\" Liền có ánh sáng." },
    { number: 4, text: "Thiên Chúa thấy rằng ánh sáng tốt đẹp. Thiên Chúa phân rẽ ánh sáng và bóng tối." },
    { number: 5, text: "Thiên Chúa gọi ánh sáng là \"ngày\", bóng tối là \"đêm\". Qua một buổi chiều và một buổi sáng: đó là ngày thứ nhất." },
    { number: 6, text: "Thiên Chúa phán: \"Phải có một cái vòm ở giữa khối nước, để phân rẽ nước với nước.\"" },
    { number: 7, text: "Thiên Chúa làm ra cái vòm đó và phân rẽ nước phía dưới vòm với nước phía trên. Liền có như vậy." },
    { number: 8, text: "Thiên Chúa gọi vòm đó là \"trời\". Qua một buổi chiều và một buổi sáng: đó là ngày thứ hai." },
    { number: 9, text: "Thiên Chúa phán: \"Nước phía dưới trời phải tụ lại một nơi, để chỗ cạn lộ ra.\" Liền có như vậy." },
    { number: 10, text: "Thiên Chúa gọi chỗ cạn là \"đất\", khối nước tụ lại là \"biển\". Thiên Chúa thấy thế là tốt đẹp." },
    { number: 11, text: "Thiên Chúa phán: \"Đất phải sinh thảo mộc xanh tươi, cỏ mang hạt giống, và cây trên mặt đất có trái, ra trái tuỳ theo loại, trong có hạt giống.\" Liền có như vậy." },
    { number: 12, text: "Đất trổ sinh thảo mộc, cỏ mang hạt giống tuỳ theo loại, và cây ra trái, trong trái có hạt giống tuỳ theo loại. Thiên Chúa thấy thế là tốt đẹp." },
    { number: 13, text: "Qua một buổi chiều và một buổi sáng: đó là ngày thứ ba." },
    { number: 14, text: "Thiên Chúa phán: \"Phải có những vầng sáng trên vòm trời, để phân rẽ ngày với đêm, để làm dấu chỉ xác định các đại lễ, ngày và năm.\"" },
    { number: 15, text: "\"Các vầng sáng đó sẽ ở trên vòm trời để chiếu soi mặt đất.\" Liền có như vậy." },
    { number: 16, text: "Thiên Chúa làm ra hai vầng sáng lớn: vầng sáng lớn hơn để điều khiển ngày, vầng sáng nhỏ hơn để điều khiển đêm; Người cũng làm ra các ngôi sao." },
    { number: 17, text: "Thiên Chúa đặt các vầng sáng trên vòm trời để chiếu soi mặt đất," },
    { number: 18, text: "để điều khiển ngày và đêm, và để phân rẽ ánh sáng với bóng tối. Thiên Chúa thấy thế là tốt đẹp." },
    { number: 19, text: "Qua một buổi chiều và một buổi sáng: đó là ngày thứ tư." },
    { number: 20, text: "Thiên Chúa phán: \"Nước phải sinh ra đầy dẫy những sinh vật lúc nhúc, và loài chim phải bay lượn trên mặt đất, dưới vòm trời.\"" },
    { number: 21, text: "Thiên Chúa sáng tạo các loài thuỷ quái khổng lồ, cùng mọi sinh vật vẫy vùng lúc nhúc dưới nước tuỳ theo loại, và mọi giống chim bay tuỳ theo loại. Thiên Chúa thấy thế là tốt đẹp." },
    { number: 22, text: "Thiên Chúa chúc phúc cho chúng rằng: \"Hãy sinh sôi nảy nở thật nhiều, cho đầy biển; và chim phải sinh sản cho nhiều trên mặt đất.\"" },
    { number: 23, text: "Qua một buổi chiều và một buổi sáng: đó là ngày thứ năm." },
    { number: 24, text: "Thiên Chúa phán: \"Đất phải sinh ra các sinh vật tuỳ theo loại: gia súc, loài bò sát và dã thú tuỳ theo loại.\" Liền có như vậy." },
    { number: 25, text: "Thiên Chúa làm ra dã thú tuỳ theo loại, gia súc tuỳ theo loại và loài bò sát dưới đất tuỳ theo loại. Thiên Chúa thấy thế là tốt đẹp." },
    { number: 26, text: "Thiên Chúa phán: \"Chúng ta hãy làm ra con người theo hình ảnh chúng ta, giống như chúng ta, để con người làm bá chủ cá biển, chim trời, gia súc, dã thú, tất cả mặt đất và mọi giống vật bò dưới đất.\"" },
    { number: 27, text: "Thiên Chúa sáng tạo con người theo hình ảnh mình, Thiên Chúa sáng tạo con người theo hình ảnh Thiên Chúa, Thiên Chúa sáng tạo con người có nam có nữ." },
    { number: 28, text: "Thiên Chúa ban phúc lành cho họ, và Thiên Chúa phán với họ: \"Hãy sinh sôi nảy nở thật nhiều, cho đầy mặt đất, và thống trị mặt đất. Hãy làm bá chủ cá biển, chim trời, và mọi giống vật bò trên mặt đất.\"" },
    { number: 29, text: "Thiên Chúa phán: \"Đây Ta ban cho các ngươi mọi thứ cỏ mang hạt giống trên khắp mặt đất, và mọi thứ cây có trái mang hạt giống, để làm lương thực cho các ngươi.\"" },
    { number: 30, text: "\"Còn đối với mọi dã thú, chim trời và mọi vật bò dưới đất mà có sinh khí, thì Ta ban cho chúng mọi thứ cỏ xanh tươi để làm lương thực.\" Liền có như vậy." },
    { number: 31, text: "Thiên Chúa thấy mọi sự Người đã làm ra quả là rất tốt đẹp! Qua một buổi chiều và một buổi sáng: đó là ngày thứ sáu." },
  ],
};

// Gio-an - Chương 1
const john1: Chapter = {
  bookId: "john",
  chapter: 1,
  verses: [
    { number: 1, text: "Lúc khởi đầu đã có Ngôi Lời. Ngôi Lời vẫn hướng về Thiên Chúa, và Ngôi Lời là Thiên Chúa." },
    { number: 2, text: "Lúc khởi đầu, Người vẫn hướng về Thiên Chúa." },
    { number: 3, text: "Nhờ Ngôi Lời, vạn vật được tạo thành, và không có Người, thì chẳng có gì được tạo thành. Điều đã được tạo thành" },
    { number: 4, text: "ở nơi Người là sự sống, và sự sống là ánh sáng cho nhân loại." },
    { number: 5, text: "Ánh sáng chiếu soi trong bóng tối, và bóng tối đã không diệt được ánh sáng." },
    { number: 6, text: "Có một người được Thiên Chúa sai đến, tên là Gio-an." },
    { number: 7, text: "Ông đến để làm chứng, và làm chứng về ánh sáng, để mọi người nhờ ông mà tin." },
    { number: 8, text: "Ông không phải là ánh sáng, nhưng ông đến để làm chứng về ánh sáng." },
    { number: 9, text: "Ngôi Lời là ánh sáng thật, ánh sáng đến thế gian và chiếu soi mọi người." },
    { number: 10, text: "Người ở giữa thế gian, và thế gian đã nhờ Người mà có, nhưng lại không nhận biết Người." },
    { number: 11, text: "Người đã đến nhà mình, nhưng người nhà chẳng chịu đón nhận." },
    { number: 12, text: "Còn những ai đón nhận, tức là những ai tin vào danh Người, thì Người cho họ quyền trở nên con Thiên Chúa." },
    { number: 13, text: "Họ được sinh ra, không phải do khí huyết, cũng chẳng do ước muốn của nhục thể, hoặc do ước muốn của người đàn ông, nhưng do bởi Thiên Chúa." },
    { number: 14, text: "Ngôi Lời đã trở nên người phàm và cư ngụ giữa chúng ta. Chúng tôi đã được nhìn thấy vinh quang của Người, vinh quang mà Chúa Cha ban cho Người, là Con Một đầy tràn ân sủng và sự thật." },
    { number: 15, text: "Ông Gio-an làm chứng về Người, ông tuyên bố: \"Đây là Đấng mà tôi đã nói: Người đến sau tôi, nhưng trổi hơn tôi, vì có trước tôi.\"" },
    { number: 16, text: "Từ nguồn sung mãn của Người, tất cả chúng ta đã lãnh nhận hết ơn này đến ơn khác." },
    { number: 17, text: "Quả thế, Lề Luật đã được Thiên Chúa ban qua ông Mô-sê, còn ân sủng và sự thật, thì nhờ Đức Giê-su Ki-tô mà có." },
    { number: 18, text: "Thiên Chúa, chưa bao giờ có ai thấy cả; nhưng Con Một vốn là Thiên Chúa và là Đấng hằng ở nơi cung lòng Chúa Cha, chính Người đã tỏ cho chúng ta biết." },
    { number: 19, text: "Và đây là lời chứng của ông Gio-an, khi người Do-thái từ Giê-ru-sa-lem cử một số tư tế và mấy thầy Lê-vi đến hỏi ông: \"Ông là ai?\"" },
    { number: 20, text: "Ông tuyên bố thẳng thắn, ông tuyên bố rằng: \"Tôi không phải là Đấng Ki-tô.\"" },
    { number: 21, text: "Họ lại hỏi ông: \"Vậy thì thế nào? Ông là ông Ê-li-a sao?\" Ông nói: \"Không phải.\" - \"Ông là vị ngôn sứ chăng?\" Ông đáp: \"Không.\"" },
    { number: 22, text: "Họ liền nói với ông: \"Thế ông là ai, để chúng tôi còn trả lời cho những người đã cử chúng tôi đến? Ông nói gì về chính ông?\"" },
    { number: 23, text: "Ông nói: \"Tôi là tiếng người hô trong hoang địa: Hãy sửa đường cho thẳng để Đức Chúa đi, như ngôn sứ I-sai-a đã nói.\"" },
    { number: 24, text: "Trong nhóm được cử đi, có mấy người thuộc phái Pha-ri-sêu." },
    { number: 25, text: "Họ hỏi ông: \"Vậy tại sao ông làm phép rửa, nếu ông không phải là Đấng Ki-tô, cũng không phải là ông Ê-li-a hay vị ngôn sứ?\"" },
    { number: 26, text: "Ông Gio-an trả lời: \"Tôi đây làm phép rửa trong nước. Nhưng có một vị đang ở giữa các ông mà các ông không biết." },
    { number: 27, text: "Người sẽ đến sau tôi và tôi không đáng cởi quai dép cho Người.\"" },
    { number: 28, text: "Các việc đó đã xảy ra tại Bê-ta-ni-a, bên kia sông Gio-đan, nơi ông Gio-an làm phép rửa." },
    { number: 29, text: "Hôm sau, ông Gio-an thấy Đức Giê-su tiến về phía mình, liền nói: \"Đây là Chiên Thiên Chúa, đây Đấng xoá bỏ tội trần gian." },
    { number: 30, text: "Chính Người là Đấng tôi đã nói tới khi bảo rằng: Có người đến sau tôi, nhưng trổi hơn tôi, vì có trước tôi." },
    { number: 31, text: "Tôi đã không biết Người, nhưng để Người được tỏ ra cho dân Ít-ra-en, tôi đến làm phép rửa trong nước.\"" },
    { number: 32, text: "Ông Gio-an còn làm chứng: \"Tôi đã thấy Thần Khí tựa chim bồ câu từ trời xuống và ngự trên Người." },
    { number: 33, text: "Tôi đã không biết Người. Nhưng chính Đấng sai tôi đi làm phép rửa trong nước đã bảo tôi: Ngươi thấy Thần Khí xuống và ngự trên ai, thì người đó chính là Đấng làm phép rửa trong Thánh Thần." },
    { number: 34, text: "Tôi đã thấy, nên xin chứng thực rằng Người là Đấng Thiên Chúa tuyển chọn.\"" },
    { number: 35, text: "Hôm sau, ông Gio-an lại đang đứng với hai người trong nhóm môn đệ của ông." },
    { number: 36, text: "Thấy Đức Giê-su đi ngang qua, ông lên tiếng nói: \"Đây là Chiên Thiên Chúa.\"" },
    { number: 37, text: "Hai môn đệ nghe ông nói, liền đi theo Đức Giê-su." },
    { number: 38, text: "Đức Giê-su quay lại, thấy các ông đi theo mình, thì hỏi: \"Các anh tìm gì thế?\" Họ đáp: \"Thưa Ráp-bi (nghĩa là thưa Thầy), Thầy ở đâu?\"" },
    { number: 39, text: "Người bảo họ: \"Đến mà xem.\" Họ đã đến xem chỗ Người ở, và ở lại với Người ngày hôm ấy. Lúc đó vào khoảng giờ thứ mười." },
    { number: 40, text: "Ông An-rê, anh ông Si-môn Phê-rô, là một trong hai người đã nghe ông Gio-an nói và đi theo Đức Giê-su." },
    { number: 41, text: "Trước hết, ông gặp em mình là ông Si-môn và nói: \"Chúng tôi đã gặp Đấng Mê-si-a\" (nghĩa là Đấng Ki-tô)." },
    { number: 42, text: "Rồi ông dẫn em mình đến gặp Đức Giê-su. Đức Giê-su nhìn ông Si-môn và nói: \"Anh là Si-môn, con ông Gio-an, anh sẽ được gọi là Kê-pha\" (tức là Phê-rô)." },
    { number: 43, text: "Hôm sau, Đức Giê-su quyết định đi tới miền Ga-li-lê. Người gặp ông Phi-líp-phê và nói: \"Anh hãy theo tôi.\"" },
    { number: 44, text: "Ông Phi-líp-phê là người Bết-xai-đa, cùng quê với các ông An-rê và Phê-rô." },
    { number: 45, text: "Ông Phi-líp-phê gặp ông Na-tha-na-en và nói: \"Đấng mà sách Luật Mô-sê và các ngôn sứ nói tới, chúng tôi đã gặp: đó là ông Giê-su, con ông Giu-se, người Na-da-rét.\"" },
    { number: 46, text: "Ông Na-tha-na-en liền bảo: \"Từ Na-da-rét, làm sao có cái gì hay được?\" Ông Phi-líp-phê trả lời: \"Cứ đến mà xem!\"" },
    { number: 47, text: "Đức Giê-su thấy ông Na-tha-na-en tiến về phía mình, liền nói về ông rằng: \"Đây đích thật là một người Ít-ra-en, lòng dạ không có gì gian dối.\"" },
    { number: 48, text: "Ông Na-tha-na-en hỏi Người: \"Làm sao Ngài lại biết tôi?\" Đức Giê-su trả lời: \"Trước khi Phi-líp-phê gọi anh, lúc anh đang ở dưới cây vả, tôi đã thấy anh rồi.\"" },
    { number: 49, text: "Ông Na-tha-na-en nói: \"Thưa Thầy, chính Thầy là Con Thiên Chúa, chính Thầy là Vua Ít-ra-en!\"" },
    { number: 50, text: "Đức Giê-su đáp: \"Vì tôi nói với anh là tôi đã thấy anh ở dưới cây vả, nên anh tin! Anh sẽ còn được thấy những điều lớn lao hơn thế nữa.\"" },
    { number: 51, text: "Người lại nói: \"Thật, tôi bảo thật các anh, các anh sẽ thấy trời rộng mở, và các thiên thần của Thiên Chúa lên lên xuống xuống trên Con Người.\"" },
  ],
};

// Thánh Vịnh 23
const psalm23: Chapter = {
  bookId: "psalms",
  chapter: 23,
  verses: [
    { number: 1, text: "CHÚA là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì." },
    { number: 2, text: "Trong đồng cỏ xanh tươi, Người cho tôi nằm nghỉ. Người đưa tôi tới dòng nước trong lành" },
    { number: 3, text: "và bổ sức cho tôi. Người dẫn tôi trên đường ngay nẻo chính vì danh dự của Người." },
    { number: 4, text: "Lạy Chúa, dầu qua lũng âm u con sợ gì nguy khốn, vì có Chúa ở cùng. Côn trượng Ngài bảo vệ, con vững dạ an tâm." },
    { number: 5, text: "Chúa dọn sẵn cho con bữa tiệc ngay trước mặt quân thù. Đầu con, Chúa xức đượm dầu thơm, ly rượu con đầy tràn chan chứa." },
    { number: 6, text: "Lòng nhân hậu và tình thương CHÚA ấp ủ tôi suốt cả cuộc đời, và tôi được ở đền Người những ngày tháng, những năm dài triền miên." },
  ],
};

// Mát-thêu 5 (Bài giảng trên núi - Tám mối phúc)
const matthew5: Chapter = {
  bookId: "matthew",
  chapter: 5,
  verses: [
    { number: 1, text: "Thấy đám đông, Đức Giê-su lên núi. Người ngồi xuống, các môn đệ đến gần bên." },
    { number: 2, text: "Người mở miệng dạy họ rằng:" },
    { number: 3, text: "\"Phúc thay ai có tâm hồn nghèo khó, vì Nước Trời là của họ." },
    { number: 4, text: "Phúc thay ai hiền lành, vì họ sẽ được Đất Hứa làm gia nghiệp." },
    { number: 5, text: "Phúc thay ai sầu khổ, vì họ sẽ được Thiên Chúa ủi an." },
    { number: 6, text: "Phúc thay ai khát khao nên người công chính, vì họ sẽ được Thiên Chúa cho thoả lòng." },
    { number: 7, text: "Phúc thay ai xót thương người, vì họ sẽ được Thiên Chúa xót thương." },
    { number: 8, text: "Phúc thay ai có tâm hồn trong sạch, vì họ sẽ được nhìn thấy Thiên Chúa." },
    { number: 9, text: "Phúc thay ai xây dựng hoà bình, vì họ sẽ được gọi là con Thiên Chúa." },
    { number: 10, text: "Phúc thay ai bị bách hại vì sống công chính, vì Nước Trời là của họ." },
    { number: 11, text: "Phúc thay anh em khi vì Thầy mà bị người ta sỉ vả, bách hại và vu khống đủ điều xấu xa." },
    { number: 12, text: "Anh em hãy vui mừng hớn hở, vì phần thưởng dành cho anh em ở trên trời thật lớn lao. Quả vậy, các ngôn sứ là những người đi trước anh em cũng bị người ta bách hại như thế.\"" },
    { number: 13, text: "\"Chính anh em là muối cho đời. Nhưng muối mà nhạt đi, thì lấy gì muối nó cho mặn lại? Nó đã thành vô dụng, thì chỉ còn việc quăng ra ngoài cho người ta chà đạp thôi.\"" },
    { number: 14, text: "\"Chính anh em là ánh sáng cho trần gian. Một thành xây trên núi không tài nào che giấu được." },
    { number: 15, text: "Cũng chẳng ai thắp đèn rồi lại đặt bên dưới cái thùng, nhưng đặt trên đế, và đèn soi chiếu cho mọi người trong nhà." },
    { number: 16, text: "Cũng vậy, ánh sáng của anh em phải chiếu giãi trước mặt thiên hạ, để họ thấy những công việc tốt đẹp anh em làm, mà tôn vinh Cha của anh em, Đấng ngự trên trời.\"" },
    { number: 17, text: "\"Anh em đừng tưởng Thầy đến để bãi bỏ Luật Mô-sê hoặc lời các ngôn sứ. Thầy đến không phải là để bãi bỏ, nhưng là để kiện toàn." },
    { number: 18, text: "Vì, Thầy bảo thật anh em, trước khi trời đất qua đi, thì một chấm một phết trong Lề Luật cũng sẽ không qua đi, cho đến khi mọi sự được hoàn thành." },
    { number: 19, text: "Vậy ai bãi bỏ dù chỉ là một trong những điều răn nhỏ nhất ấy, và dạy người ta làm như thế, thì sẽ bị gọi là kẻ nhỏ nhất trong Nước Trời. Còn ai tuân hành và dạy làm như thế, thì sẽ được gọi là lớn trong Nước Trời." },
    { number: 20, text: "Vậy, Thầy bảo cho anh em biết, nếu anh em không ăn ở công chính hơn các kinh sư và người Pha-ri-sêu, thì sẽ chẳng được vào Nước Trời.\"" },
  ],
};

// Lưu trữ tất cả nội dung
export const bibleContent: Record<string, Chapter> = {
  "genesis-1": genesis1,
  "john-1": john1,
  "psalms-23": psalm23,
  "matthew-5": matthew5,
};

// Helper function để lấy nội dung chương
export function getChapterContent(bookId: string, chapter: number): Chapter | null {
  const key = `${bookId}-${chapter}`;
  return bibleContent[key] || null;
}

// Tạo nội dung giả cho các chương chưa có
export function generatePlaceholderContent(bookId: string, chapter: number): Chapter {
  const verses: { number: number; text: string }[] = [];
  const verseCount = Math.floor(Math.random() * 20) + 10; // 10-30 câu

  for (let i = 1; i <= verseCount; i++) {
    verses.push({
      number: i,
      text: `Đây là nội dung mẫu cho câu ${i} của chương ${chapter}. Nội dung thực tế sẽ được cập nhật sau.`,
    });
  }

  return {
    bookId,
    chapter,
    verses,
  };
}

// Lấy nội dung chương (có fallback)
export function getChapter(bookId: string, chapter: number): Chapter {
  const content = getChapterContent(bookId, chapter);
  if (content) return content;
  return generatePlaceholderContent(bookId, chapter);
}
