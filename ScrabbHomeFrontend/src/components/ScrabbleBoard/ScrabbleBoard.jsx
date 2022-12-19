import './ScrabbleBoard.css';
import React from 'react';
import letters from '../../data/letters';
import LetterTile from '../LetterTile/LetterTile';

export default function ScrabbleBoard() {
	return (
		<div>
			{letters.map((letter, index) => {
				return <LetterTile letter={letter} indicator={index + 1} key={letter} />;
			})}
		</div>
	);
}
