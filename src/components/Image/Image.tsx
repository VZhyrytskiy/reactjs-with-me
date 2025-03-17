import WomanImage from './../../assets/woman.jpg';

function Image() {
  const url = 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div>
        <div>
            <img src={url} alt="pexels" />
        </div>
        <div>
            <img src="/man.jpg" alt="pexels" width="600" />
        </div>
        <div>
            <img src={WomanImage} alt="pexels" width="600" />
        </div>
    </div>
  )
}

export default Image;