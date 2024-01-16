import Image from "next/image"
export const Trending = (props) => {
    const { imgsrc, text } = props;
    const Slides= [
        {
            imgsrc: "/Mountain.png",
            text: "The Impact of Technology on the Workplace: How Technology is Changing"
        },
        {
            imgsrc: "/Mountain.png",
            text: "The Impact of Technology on the Workplace: How Technology is Changing"
        },
        {
            imgsrc: "/Mountain.png",
            text: "The Impact of Technology on the Workplace: How Technology is Changing"
        },
        {
            imgsrc: "/Mountain.png",
            text: "The Impact of Technology on the Workplace: How Technology is Changing"
        }
    ]
    return (
        <div className="">
            <p>Trending</p>
<<<<<<< HEAD
            {Slides.map((el, i) => {
            return (
              <div>
                <div>
                  <Trending key={i} imgsrc={el.imgsrc} text={el.text} />
                </div>
              </div>
            );
          })}
             <Image src={imgsrc}
              width={293}
              height={320}
             className="w-[293px] h-[320px] object-scale-down "
           />
           <div>
                <div>
                    <p>Tecnology</p>
                </div>
                <div>
                    <p>{text}</p>
                </div>
           </div> 
=======
            
>>>>>>> 7688e42a17a847808538ce12de5f0955a2d562c2
        </div>
    )
}