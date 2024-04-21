import PropTypes from 'prop-types'
import { Card, Avatar, Typography } from '@material-tailwind/react'

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="text-center text-[#ff3901]"
    >
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography
        variant="h5"
        color="#ff3901"
        className="mt-6 mb-1 font-outfit"
      >
        {name}
      </Typography>
      {position && (
        <Typography className="text-blue-gray-500">{position}</Typography>
      )}
      {socials && <div className="mx-auto">{socials}</div>}
    </Card>
  )
}

TeamCard.defaultProps = {
  position: '',
  socials: null,
}

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
}

TeamCard.displayName = '/src/widgets/layout/team-card.jsx'

export default TeamCard
