import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'

{/* FontAwesome icon variables */}
const searchIcon = <FontAwesomeIcon icon={faSearch} size="3x" color="black"/>
const checkIcon = <FontAwesomeIcon icon={ faCircleCheck } size="3x" color="black"/>
const phototIcon = <FontAwesomeIcon icon={ faPhotoFilm } size="3x" color="black"/>

{/* Info card component */}
export default function Infocard() {
	return (
		<div className="flex justify-around max-w-7xl">
			{/* Info card - Left */}
			<div className="w-80 h-96">
				{/* Top half of the card */}
				<div className="top-half bg-white h-2/5 text-black p-5 flex justify-center items-center rounded-b-lg">
					{ searchIcon }
				</div>
				{/* Bottom half of the card */}
				<div className="bottom-half bg-navy h-3/5 text-white p-5 flex flex-col items-center rounded-b-lg">
					<h4 className="text-2xl font-bold py-3">Discover</h4>
					<p className="text-center">Explore stars across genres—actors, musicians, influencers. Find your favorite and get ready for a unique connection</p>
				</div>
			</div>
	
			{/* Info card - Middle */}
			<div className="w-80 h-96">
				{/* Top half of the card */}
				<div className="top-half bg-white h-2/5 text-black p-5 flex justify-center items-center rounded-b-lg">
					{ checkIcon }
				</div>
				{/* Bottom half of the card */}
				<div className="bottom-half bg-navy h-3/5 text-white p-5 flex flex-col items-center rounded-b-lg">
					<h4 className="text-2xl font-bold py-3">Book</h4>
					<p className="text-center">Book effortlessly. Click 'Book a Star,' choose options, and receive a personalized video shout-out from your star.</p>
				</div>
			</div>

			{/* Info card - Right */}
			<div className="w-80 h-96">
				{/* Top half of the card */}
				<div className="top-half bg-white h-2/5 text-black p-5 flex justify-center items-center rounded-b-lg">
					{ phototIcon }
				</div>
				{/* Bottom half of the card */}
				<div className="bottom-half bg-navy h-3/5 text-white p-5 flex flex-col items-center rounded-b-lg">
					<h4 className="text-2xl font-bold py-3">Cherish</h4>
					<p className="text-center">Enjoy the magic! Your unique video shout-out is delivered. Share with friends or keep as a cherished memento.</p>
				</div>
			</div>
		</div>
	)
}
