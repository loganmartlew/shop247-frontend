import { Tile, Title, Subtitle, Info, Img, Price } from "./SPTStyles";

const singleProductTile = () => {
    return (
    <Tile className='Tile'>
        <Title className='title'>Component Title</Title>
        <Subtitle className='subtitle'>subtitle</Subtitle>
        <Info>This is some infomation about the product. It can be size of the product also how much it's been used and how good condition it is</Info>
        <Img src={''} className = 'img' alt='tile-img'/>
        <Price>$0.00</Price>
    
    </Tile>
    );
};

export default singleProductTile;