
import { BackgroundImage,DirectoryItemContainer,Body } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";



const DirectoryItem = ({ categories }) => {
  const navigate = useNavigate();

  const onNavigation = () => navigate(categories.route)

  const { imageUrl, title } = categories;
  return (
    <DirectoryItemContainer onClick={onNavigation}>
      <BackgroundImage
        imageUrl={imageUrl}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
