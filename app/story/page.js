import Card from "@components/Card"

export default () => {
    return (
        <div className="main">
            <div className="w-full text-center mb-10">
                <h1 className="font-bold text-4xl">Our Story: </h1>
            </div>

            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Group 1: Giới thiệu và làm quen
                </div>
                <div className="collapse-content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 2: Cuộc sống thường ngày
                </div>
                <div className="collapse-content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Card title="01 Tán gẫu về ẩm thực" link="/story/topic/Topic01" />
                    <Card title="02 Hẹn ăn trưa với bạn" link="/story/topic/Topic02" />
                    <Card title="03 Gọi món ở nhà hàng" link="/story/topic/Topic02" />
                    <Card title="04 Tạo kế hoạch đi chơi" link="/story/topic/Topic02" />
                    <Card title="05 Hẹn hò ở rạp phim" link="/story/topic/Topic02" />
                    <Card title="06 Order cà phê tại quầy" link="/story/topic/Topic02" />
                    <Card title="07 Đi làm tóc ngày cuối tuần" link="/story/topic/Topic02" />
                    <Card title="08 Tỉnh táo khi mua bảo hiểm" link="/story/topic/Topic02" />
                    <Card title="09 Mua thẻ thành viên tại phòng gym" link="/story/topic/Topic02" />
                    <Card title="10 Đăng ký tài khoản tại ngân hàng" link="/story/topic/Topic02" />
                    <Card title="11 Đi khám sức khỏe" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 3: Công việc
                </div>
                <div className="collapse-content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 4: Giáo dục
                </div>
                <div className="collapse-content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 5: Trải nghiệm du lịch
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 6: Xử trí khi đi du lịch
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 7: Thói quen hàng ngày
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 8: Nhu cầu - sở thích
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 9: Tám chuyện công sở
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Group 10: Họp hành
                </div>
                <div className="collapse-content grid grid-cols-5 gap-4">
                    <Card title="01 Giới thiệu về bản thân" link="/story/topic/Topic01" />
                    <Card title="02 Giới thiệu về nơi sống" link="/story/topic/Topic02" />
                    <Card title="03 Chia sẻ về gia đình" link="/story/topic/Topic02" />
                    <Card title="04 Giới thiệu về công việc" link="/story/topic/Topic02" />
                    <Card title="05 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                    <Card title="06 Chia sẻ về quê hương" link="/story/topic/Topic02" />
                </div>
            </div>
            
        </div>
    )
}