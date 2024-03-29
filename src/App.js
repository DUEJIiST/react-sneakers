function App() {
  return (
		<div className= "wrapper clear">
			<header className="d-flex justify-between align-center p-35">
				<div className="d-flex align-center">
					<img width= {40} height= {40} src = "/img/logo.png" alt=""/>
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">
							Магазин найкращих кросівок
						</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width= {18} height= {18} src = "/img/cart.svg" alt=""/>
						<span>2700 грн</span>
					</li>
					<li>
					<img width= {18} height= {18} src = "/img/user.svg" alt=""/>
					</li>
				</ul>
			</header>
			<div className="content p-35">
				<h1 className="mb-40">Всі кросівки</h1>
				<div className="d-flex align-center">
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/1.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/10.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/3.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/4.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					{/* <div className="card">
						<img width={133} height={112} src="/img/sneakers/5.jpg" alt= "Sneakers"/>	
						<div className="d-flex justify-between align-center" >
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/6.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/7.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/8.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/9.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/10.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/11.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/12.jpg" alt= "Sneakers"/>
						<h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column ">
								<span>Ціна:</span>
								<b>4700 гривен</b>
							</div>
							<button className="button">
								<img width= {11} height={11} src= "/img/plus.svg" alt= "Plus"/>
							</button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default App;
