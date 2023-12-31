type Props = {
  name: string,
  url: string,
}

export const PhotoItem = ({name, url}: Props) => {

  return (
    <div className="photoitem">
      <img src={url} alt={name} />
    </div>
  )
}