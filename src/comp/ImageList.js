import * as React from 'react';

export default function ImageList (cards) {
    cards.cards.map(data =>(
        console.log(data.suit)
    ));

    const displayLogos = cards.cards.map((data,index) => (
                        <img
                        key={data.suit}
                        src={require(`../_common/images/cards/${data.suit}.png`)}
                        alt={`${data.value}`}
                    />
    ));

    return (
        <div className="container">
            <div className="justify-content-md-center">
                <div className="col-sm">
                    <div className="col">
              {displayLogos}</div>

                </div>
            </div>
        </div>
        )
}