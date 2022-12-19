import './LetterTile.css';

function LetterTile({ letter, indicator }) {
	return (
		<div className="tile">
			<span className="letter">{letter}</span>
			<span className="indicator">{1}</span>
		</div>
	);
}

export default LetterTile;
