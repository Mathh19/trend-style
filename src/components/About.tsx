import { Keania_One } from 'next/font/google';

const keaniaOne = Keania_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin']
});

export const About = () => {
  return (
    <section
      id="About"
      className="flex justify-center text-center w-full bg-black text-white gap-16 p-9 flex-wrap"
    >
      <div className="max-w-xl space-y-9">
        <h2 className={`${keaniaOne.className} uppercase text-6xl`}>
          About us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem
          molestiae enim, deserunt aspernatur non, maxime repellat sunt ipsam
          illum blanditiis, odit tenetur officiis fugit ab harum dolor dolores
          asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni libero explicabo blanditiis quibusdam possimus natus culpa aut,
          nisi ut, ipsam necessitatibus id suscipit quaerat. Eveniet explicabo
          obcaecati tempora mollitia accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nobis aperiam impedit nihil eveniet,
          enim voluptatem eligendi magni iusto cum illum! Sequi ducimus facilis,
          sunt ipsa voluptatum aspernatur nihil magni autem!
        </p>
      </div>
      <div>
        <img
          src="./about-us/models.png"
          alt="Image of three alternative people to represent our business style"
          className="w-full h-full max-h-[600px] max-w-sm"
        />
      </div>
    </section>
  );
};
