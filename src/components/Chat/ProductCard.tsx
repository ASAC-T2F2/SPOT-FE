export default function ProductCard() {
  const filterPosts = {
    post: [
      {
        id: 1,
        title: "컴공 교재 팔아요.",
        sellerNickname: "호니",
        price: "23,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 2,
        saleStatus: "판매중",
        createdAt: "1분 전",
        representativePhoto: "/img/csbook.jpeg",
        category: "book",
        type: "팔래요",
      },
      {
        id: 2,
        title: "벤츠 E클래스",
        sellerNickname: "깡통이",
        price: "6,300만",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 2,
        saleStatus: "판매중",
        createdAt: "10분 전",
        representativePhoto: "/img/benz.png",
        category: "electric",
        type: "팔래요",
      },
      {
        id: 3,
        title: "두바이 초콜릿 개당 3500",
        sellerNickname: "헉",
        price: "3,500",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 12,
        saleStatus: "판매 완료",
        createdAt: "10분 전",
        representativePhoto: "/img/dubai.jpg",
        category: "production",
        type: "팔래요",
      },
      {
        id: 4,
        title: "요아정 기프티콘 팔래요",
        sellerNickname: "흠",
        price: "11,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 7,
        saleStatus: "예약중",
        createdAt: "30분 전",
        representativePhoto: "/img/yogurt.jpeg",
        category: "etc",
        type: "팔래요",
      },
      {
        id: 5,
        title: "공학용 계산기 카시오 ES-1276",
        sellerNickname: "과니",
        price: "10,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 7,
        saleStatus: "판매중",
        createdAt: "30분 전",
        representativePhoto: "/favicon.ico",
        category: "electric",
        type: "팔래요",
      },
      {
        id: 6,
        title: "컴프실 23-2 족보",
        sellerNickname: "익명",
        price: "50,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 7,
        saleStatus: "판매 완료",
        createdAt: "30분 전",
        representativePhoto: "/favicon.ico",
        category: "book",
        type: "살래요",
      },
      {
        id: 7,
        title: "정유진 교수님 이산수학 교재",
        sellerNickname: "현현준준",
        price: "20,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 0,
        saleStatus: "판매중",
        createdAt: "50분 전",
        representativePhoto: "/favicon.ico",
        category: "etc",
        type: "살래요",
      },
      {
        id: 8,
        title: "얼른 데려가세요~",
        sellerNickname: "미누리",
        price: "5,000",
        content: "공학관 앞에서 직거래 원해요 쿨거",
        likes: 0,
        saleStatus: "판매중",
        createdAt: "1시간 전",
        representativePhoto: "/favicon.ico",
        category: "share",
        type: "살래요",
      },
    ],
  };
  return (
    <div className="border m-4 border-gray-300 rounded-lg shadow-md sticky top-0 z-40">
      <div className="flex p-3 items-center gap-4">
        <div className="size-16 border border-black">이미지</div>
        <div className="flex flex-col *:text-lg">
          <span>요아정 팔아요</span>
          <span className="font-semibold">23000원</span>
        </div>
      </div>
    </div>
  );
}