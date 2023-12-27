
const Image = ({ data }) => {
  return (
    <a href={data.img} target="_blank" rel="noreferrer">
      <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.img} alt={data.img} />
    </a>
  )
}

export default Image