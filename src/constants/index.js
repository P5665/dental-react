export const navLinks = [
	{
		id: '/',
		title: 'Home',
	},
	{
		id: 'about',
		title: 'About',
		dropdown: [
			{
				id: 'services',
				title: 'Services',
				dropdown: [
					{
						id: '',
						title: 'Services',
					},
					{
						id: 'general',
						title: 'General',
					},
					{
						id: 'cosmetic',
						title: 'Cosmetic',
					},
					{
						id: 'surgical',
						title: 'Surgical',
					},
				],
			},
			{
				id: 'pricing',
				title: 'Pricing',
			},
			{
				id: 'dentists',
				title: 'Dentists',
				dropdown: [
					{
						id: '',
						title: 'Meet our Team',
					},
					{
						id: 'bobby-clarke',
						title: 'Bobby Clark',
					},
					{
						id: 'wayne-gretzky',
						title: 'Wayne Gretzky',
					},
					{
						id: 'bobbi-hull',
						title: 'Bobbi Hull',
					},
				],
			},
			// {
			// 	id: 'dental-technology',
			// 	title: 'Dental Technology',
			// },
		],
	},

	{
		id: 'blog',
		title: 'Blog',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

export const contactInfo = {
	addressInfo: {
		address: {
			street: '28 Jackson St.',
			city: 'Chicago',
			state: 'IL',
			zip: '77885',
			country: 'USA',
		},
		icon: 'fa fa-map-marker',
	},
	emailInfo: {
		email: 'info.dento@gmail.com',
		icon: 'fa fa-envelope',
	},
	phoneInfo: {
		phone: '1-555-555-7676',
		icon: 'fa fa-phone',
	},
};

export const socialMedia = [
	{
		id: 'facebook',
		image: '',
		icon: 'fa fa-facebook',
		link: '/',
	},
	{
		id: 'twitter',
		image: '',
		icon: 'fa fa-twitter',
		link: '/',
	},
	{
		id: 'google plus',
		image: '',
		icon: 'fa fa-google-plus',
		link: '/',
	},
	{
		id: 'linkedin',
		image: '',
		icon: 'fa fa-linkedin',
		link: '/',
	},
	{
		id: 'pinterest',
		image: '',
		icon: 'fa fa-pinterest',
		link: '/',
	},
];

export const heroImages = [
	{
		src: '../src/assets/bg-img/1.jpg',
		altText: 'Slide 1',
		caption: 'Slide 1a',
		id: 0,
		slideHeader: 'We Believe Everyone Should Have Easy Access To Great Dental Care',
		slideBody: 'As a leading industry innovator, Dento is opening up exciting new opportunities for dental professionals, investors, employees & suppliers. Contact us to find out what we have to offer you.',
	},
	{
		src: '../src/assets/bg-img/2.jpg',
		altText: 'Slide 2',
		caption: 'Slide 2a',
		id: 1,
		slideHeader: 'We Believe Everyone Should Have Easy Access To Great Dental Care',
		slideBody: 'As a leading industry innovator, Dento is opening up exciting new opportunities for dental professionals, investors, employees & suppliers. Contact us to find out what we have to offer you.',
	},
	{
		src: '../src/assets/bg-img/3.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3a',
		id: 2,
		slideHeader: 'We Believe Everyone Should Have Easy Access To Great Dental Care',
		slideBody: 'As a leading industry innovator, Dento is opening up exciting new opportunities for dental professionals, investors, employees & suppliers. Contact us to find out what we have to offer you.',
	},
];

export const aboutSummary = {
	image: '../src/assets/bg-img/15.jpg',
	altText: 'Dentist with happy patient',
	bodyText: 'Vestibulum condimentum, risus sedones honcus rutrum, salah lacus mollis zurna, nec finibusmi velit advertisis. Proin vitae odin quis magna aliquet laciniae. Etiam auctor, nisi vel. Pellentesque ultrices nisl quam iaculis, nec pulvinar augue.',
	progressBars: [
		{
			value: 80,
			maxValue: 100,
			text: 'Experience Dentist',
		},
		{
			value: 65,
			maxValue: 100,
			text: 'Modern Equipment',
		},
		{
			value: 85,
			maxValue: 100,
			text: 'Friendly Staff',
		},
	],
	stats: [
		{
			icon: 'icon_genius',
			value: 20,
			text: 'Years of Experience',
			plus: false,
			durationTime: 20,
		},
		{
			icon: 'icon_heart_alt',
			value: 700,
			text: 'Happy Patients',
			plus: true,
			durationTime: 0.5,
		},
		{
			icon: 'icon_book_alt',
			value: 120,
			text: 'Certificates',
			plus: false,
			durationTime: 3,
		},
		{
			icon: 'icon_id',
			value: 40,
			text: 'Dentists',
			plus: true,
			durationTime: 20,
		},
	],
};

export const serviceSummary = {
	bgImg: '../src/assets/bg-img/11.jpg',
	videoImg: '../src/assets/bg-img/14.jpg',
	services: [
		{
			image: '../src/assets/core-img/s1.png',
			imageHover: '../src/assets/core-img/s6.png',
			text: 'Teeth Whitening',
		},
		{
			image: '../src/assets/core-img/s2.png',
			imageHover: '../src/assets/core-img/s7.png',
			text: 'Examination',
		},
		{
			image: '../src/assets/core-img/s3.png',
			imageHover: '../src/assets/core-img/s8.png',
			text: 'Teeth Cleaning',
		},
		{
			image: '../src/assets/core-img/s4.png',
			imageHover: '../src/assets/core-img/s9.png',
			text: 'Cosmetic Dentistry',
		},
		{
			image: '../src/assets/core-img/s5.png',
			imageHover: '../src/assets/core-img/s10.png',
			text: 'Surgical',
		},
		{
			image: '../src/assets/core-img/s1.png',
			imageHover: '../src/assets/core-img/s6.png',
			text: 'Teeth Pain',
		},
	],
};

export const priceSummary = {
	serviceHeader: ['Services', 'Stage', 'Price'],
	services: [
		{
			id: 1,
			name: 'Teeth Whitening Service at home',
			stage: '1 time',
			price: '115',
		},
		{
			id: 2,
			name: 'Teeth Whitening Service at Dental Clinic',
			stage: '1 time',
			price: '100',
		},
		{
			id: 3,
			name: 'Ceramic crowns and fillings Dental porcelain',
			stage: '1 time',
			price: '99',
		},
		{
			id: 4,
			name: 'Remove crowns, bridges Service',
			stage: '1 tooth',
			price: '50',
		},
		{
			id: 5,
			name: 'Covering the recession of the gums',
			stage: '1 time',
			price: '400',
		},
		{
			id: 6,
			name: 'Consultation, impressions and preparation of models',
			stage: '1 time',
			price: '35',
		},
		{
			id: 7,
			name: 'Removal of an old inlay, old crown',
			stage: '1 time',
			price: '99',
		},
		{
			id: 8,
			name: 'Overlay teeth whitening ( 2 arches)',
			stage: '1 time',
			price: '170',
		},
		{
			id: 9,
			name: 'Standard porcelain and zirconium crown on implant',
			stage: '1 tooth',
			price: '499',
		},
		{
			id: 10,
			name: 'Implantation of an implant (price depends on system used)',
			stage: '1 tooth',
			price: '600',
		},
		{
			id: 11,
			name: 'Covering the recession of the gums',
			stage: '1 time',
			price: '400',
		},
		{
			id: 12,
			name: 'Consultation, impressions and preparation of models',
			stage: '1 time',
			price: '35',
		},
		{
			id: 13,
			name: 'Removal of an old inlay, old crown',
			stage: '1 time',
			price: '99',
		},
		{
			id: 14,
			name: 'Overlay teeth whitening ( 2 arches)',
			stage: '1 time',
			price: '170',
		},
		{
			id: 15,
			name: 'Standard porcelain and zirconium crown on implant',
			stage: '1 tooth',
			price: '499',
		},
		{
			id: 16,
			name: 'Covering the recession of the gums',
			stage: '1 time',
			price: '400',
		},
		{
			id: 17,
			name: 'Consultation, impressions and preparation of models',
			stage: '1 time',
			price: '35',
		},
		{
			id: 18,
			name: 'Removal of an old inlay, old crown',
			stage: '1 time',
			price: '99',
		},
		{
			id: 19,
			name: 'Overlay teeth whitening ( 2 arches)',
			stage: '1 time',
			price: '170',
		},
		{
			id: 20,
			name: 'Standard porcelain and zirconium crown on implant',
			stage: '1 tooth',
			price: '499',
		},
		{
			id: 21,
			name: 'Implantation of an implant (price depends on system used)',
			stage: '1 tooth',
			price: '600',
		},
	],
};

export const dentistList = [
	{
		id: 1,
		name: 'Bobby Clarke',
		title: 'Dr.',
		nickname: 'Tooth Trouncer',
		intro: 'Meet Bobby Clarke: From Hockey Pucks to Dental Plucks!',
		specialty: 'Dental MVP, Oral Hygiene Power Plays',
		image: '../src/assets/bg-img/9.png',
		expertise: 'Surgical Expert',
		bio: "Once a fierce competitor on the ice, Bobby Clarke traded his hockey stick for a dental mirror, but he's still in the game, just on a different kind of rink—the dental clinic! With a grin as charming as his slapshot, Dr. Clarke is here to ensure your teeth get the same level of precision care he used to show those hockey pucks.",
		education: ['Ice Rinks: Where he honed his quick reflexes.', 'School of Dentistry: Where he learned that teeth are tougher than puck boards.'],
		catchphrase: "Your teeth may not be as tough as hockey pucks, but with Dr. Clarke's care, they'll be unstoppable!",
		services: ['Tooth Hockey: A unique approach to dental care, where every tooth is treated like a goal to protect.', "Championship Smiles: Get a smile that's as bright as a Zamboni's headlights.", "Dental Power Plays: Dr. Clarke's signature treatment to restore teeth to their championship form.", 'Mouthguard Fittings: Because even your teeth need defense against unexpected hits.'],
		fun: ['Dental Cup: Dr. Clarke\'s dental practice holds an annual "Dental Cup" hockey match.', 'Hockey Memorabilia: His clinic is adorned with signed toothbrushes, hockey sticks, and photos with celebrity smiles.'],
	},
	{
		id: 2,
		name: 'Wayne Gretzky',
		title: 'Dr.',
		nickname: 'Smile Sniper',
		intro: 'Wayne Gretzky: Scoring Goals and Smiles!',
		specialty: 'Dental Goals, Oral Health MVP',
		image: '../src/assets/bg-img/10.png',
		expertise: 'Great One',
		bio: "From the ice rink to the dental chair, Wayne Gretzky continues to make strides in delivering top-notch performance. While he may have retired his hockey skates, he's still in the business of scoring big—this time, in the world of dental care!",
		education: ['Hockey Arenas: Where he perfected precision.', 'Dental School: Where he learned to give teeth the same attention as he gave to scoring goals.'],
		catchphrase: "Just like on the ice, excellence is the goal—let's score the perfect smile together!",
		services: ['Smile Slapshots: Precision treatments to ensure your smile is always top shelf.', 'Mouthguard Mastery: Get your teeth game-ready with custom-made mouthguards.', "Dental Hat Tricks: Dr. Gretzky's signature approach to restoring teeth to their prime.", 'Championship Whitening: Achieve a winning smile that shines brighter than the arena lights.'],
		fun: ['Golden Dental Tools: Dr. Gretzky uses dental tools made of recycled hockey sticks.', 'Celebrity Smiles: His clientele includes fellow athletes, celebrities, and fans looking for a winning smile.'],
	},
	{
		id: 3,
		name: 'Bobbi Hull',
		title: 'Dr.',
		nickname: 'Tooth Tiger',
		intro: 'Bobbi Hull: Slapshot Smiles and Dental Power Plays!',
		specialty: 'Dental Artistry, Oral Health Dynamo',
		image: '../src/assets/bg-img/11.png',
		expertise: 'Pediatric & Family Expert',
		bio: "From the ice to the dental chair, Bobbi Hull's legendary precision now brings winning smiles to the forefront. After ruling the hockey rink, she's mastered the art of crafting picture-perfect smiles that deserve their own trophy!",
		education: ['Hockey Arenas: Where she honed her focus and accuracy.', 'Dental Academy: Where she learned to create masterpieces in the form of smiles.'],
		catchphrase: "Just like on the ice, every detail counts—let's create a smile that's a true work of art!",
		services: ["Smile Slapshots: Bobbi's signature technique to create smiles that light up the room.", 'Dental Masterstrokes: Craftsmanship that turns dental procedures into works of art.', 'Tooth Restoration Magic: Transforming damaged teeth into stunning creations.', 'Champion Whitening: Achieve a bright, winning smile worthy of the Hall of Fame.'],
		fun: ["Brushing Power: Bobbi's brushing technique is rumored to be as powerful as her slapshot.", 'Hockey-Dental Fusion: She once fixed a tooth while discussing hockey strategies with a patient.', 'Dental Fan Club: Her patients often refer to themselves as the "Tooth Tigers."'],
	},
];

export const reviews = [
	{
		id: 1,
		image: '../src/assets/bg-img/8.jpg',
		bodyText: '"I\'d been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice."',
		name: 'A-aron Ramses',
		affiliation: 'Dental Patient - "He\'s da bess!"',
	},
	{
		id: 2,
		image: '../src/assets/bg-img/8.jpg',
		bodyText: '"I\'d been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice."',
		name: 'A-aron Ramses',
		affiliation: 'Dental Patient - "He\'s da bess!"',
	},
	{
		id: 3,
		image: '../src/assets/bg-img/8.jpg',
		bodyText: '"I\'d been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice."',
		name: 'A-aron Ramses',
		affiliation: 'Dental Patient - "He\'s da bess!"',
	},
];

export const blogArticles = {
	articles: {
		['Happy Smiles']: [
			{
				id: 1,
				title: 'How your mouth bacteria can harm your lungs',
				date: '2023-08-08T11:44:37',
				image: '../src/assets/bg-img/24.jpg',
				commentsCount: 3,
				summaryText:
					'Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue. Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.',
				bodyHtml: `<p>Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue.
                Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam
                imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.</p>
                <p>Vestibulum vel ante a quam consectetur volutpat eu a felis. Nullam non dui quis massa condimentum porttitor non ut nisi. Maecenas congue scelerisque purus, eget molestie ligulan volutpatut. Integer artor miss, cursussed efficitur non,
              consequat a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer vel ullamcorper neque. Quisque convallis ante purus, eget congutor ultrices. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean anunc massa venenatis ullamcorper. Mauris ipsum tellus, faucibus massa non, dapibus suscipit orci.</p>
              <blockquote cite="" class="dento-blockquote d-flex">
              <div class="icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <div class="text">
                <h5>Good dental care doesn't make you a good student, but if your tooth hurts, it's hard to be a good student</h5>
                <h6>Geoffrey Canada / <span>Social Activist</span></h6>
              </div>
            </blockquote>
            <img src="./img/bg-img/25.jpg" alt="">
            <p>Nunc vitae nisl porttitor, consectetur sapien vel, vulputate orci. Sed viverra, neque action lacinia hendrerit, lectus purus pellentesque dui, eu porttitor enim neque vitae magna. Nunc nec eros nonta risus vestibulum feugiat. In
              semper tempor sem, eget porttitor dolor convallis sit amet. Praesent ut justo augue. Curabitur id elit nisi. Vivamus varius lacus sit amet nisi lacinia, sed pulvinar odio rhoncus. In sagittis aliquet tellus. Nulla pellentesque, risus
              vitae porta iaculis, metus tortor cursus felis, at porta odio lorem nonsa mauris. Nullam mattis nulla blandit sapien cursus, quis luctus ex volutpat. Vestibulum santa dui nulla, sed feugiat felis hendrerit euro. Praesent in lobortis
              orci, vitae finibus tortor. Aliquam nisl sapien, posuere ac accumsan scelerisque, eleifend quis dui, quisque cursus congue nibh pretium blandit.</p>
            `,
			},
		],
		['Oral Health']: [
			{
				id: 1,
				title: 'Why you should avoid sipping your drinks',
				date: '2023-07-07T11:44:37',
				image: '../src/assets/bg-img/6.jpg',
				commentsCount: 3,
				summaryText:
					'Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue. Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.',
				bodyHtml: `<p>Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue.
                Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam
                imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.</p>
                <p>Vestibulum vel ante a quam consectetur volutpat eu a felis. Nullam non dui quis massa condimentum porttitor non ut nisi. Maecenas congue scelerisque purus, eget molestie ligulan volutpatut. Integer artor miss, cursussed efficitur non,
              consequat a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer vel ullamcorper neque. Quisque convallis ante purus, eget congutor ultrices. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean anunc massa venenatis ullamcorper. Mauris ipsum tellus, faucibus massa non, dapibus suscipit orci.</p>
              <blockquote cite="" class="dento-blockquote d-flex">
              <div class="icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <div class="text">
                <h5>Good dental care doesn't make you a good student, but if your tooth hurts, it's hard to be a good student</h5>
                <h6>Geoffrey Canada / <span>Social Activist</span></h6>
              </div>
            </blockquote>
            <img src="./img/bg-img/25.jpg" alt="">
            <p>Nunc vitae nisl porttitor, consectetur sapien vel, vulputate orci. Sed viverra, neque action lacinia hendrerit, lectus purus pellentesque dui, eu porttitor enim neque vitae magna. Nunc nec eros nonta risus vestibulum feugiat. In
              semper tempor sem, eget porttitor dolor convallis sit amet. Praesent ut justo augue. Curabitur id elit nisi. Vivamus varius lacus sit amet nisi lacinia, sed pulvinar odio rhoncus. In sagittis aliquet tellus. Nulla pellentesque, risus
              vitae porta iaculis, metus tortor cursus felis, at porta odio lorem nonsa mauris. Nullam mattis nulla blandit sapien cursus, quis luctus ex volutpat. Vestibulum santa dui nulla, sed feugiat felis hendrerit euro. Praesent in lobortis
              orci, vitae finibus tortor. Aliquam nisl sapien, posuere ac accumsan scelerisque, eleifend quis dui, quisque cursus congue nibh pretium blandit.</p>
            `,
			},
		],
		['Kids Care']: [
			{
				id: 1,
				title: 'What is the best kind of toothpaste to use',
				date: '2023-07-07T11:44:37',
				image: '../src/assets/bg-img/5.jpg',
				commentsCount: 3,
				summaryText:
					'Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue. Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.',
				bodyHtml: `<p>Donec tempor, lorem et euismod elefend, est lectus laoreet ante, sed acusan justo diam nec tincidunt interdum ante consectetur dapibus molestie utsalism eleifend metus lacus nec neque. Donec pellentesque nisl nec ligula tempor congue.
                Nullam rutrum nunc and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac convallis sem, a venenatis lacus. Phasellus in massa in ligula placerat tempus. Quisque id egestas odio, eget accumsan odio. Nunc vel turpis viverra quam
                imperdiet pellentesque. Nunc vitae sapien eu lorem convallis cursus nec lectus. Praesent cursus ornare lacus ac aliquet.</p>
                <p>Vestibulum vel ante a quam consectetur volutpat eu a felis. Nullam non dui quis massa condimentum porttitor non ut nisi. Maecenas congue scelerisque purus, eget molestie ligulan volutpatut. Integer artor miss, cursussed efficitur non,
              consequat a diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer vel ullamcorper neque. Quisque convallis ante purus, eget congutor ultrices. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean anunc massa venenatis ullamcorper. Mauris ipsum tellus, faucibus massa non, dapibus suscipit orci.</p>
              <blockquote cite="" class="dento-blockquote d-flex">
              <div class="icon">
                <i class="fa fa-quote-left"></i>
              </div>
              <div class="text">
                <h5>Good dental care doesn't make you a good student, but if your tooth hurts, it's hard to be a good student</h5>
                <h6>Geoffrey Canada / <span>Social Activist</span></h6>
              </div>
            </blockquote>
            <img src="./img/bg-img/25.jpg" alt="">
            <p>Nunc vitae nisl porttitor, consectetur sapien vel, vulputate orci. Sed viverra, neque action lacinia hendrerit, lectus purus pellentesque dui, eu porttitor enim neque vitae magna. Nunc nec eros nonta risus vestibulum feugiat. In
              semper tempor sem, eget porttitor dolor convallis sit amet. Praesent ut justo augue. Curabitur id elit nisi. Vivamus varius lacus sit amet nisi lacinia, sed pulvinar odio rhoncus. In sagittis aliquet tellus. Nulla pellentesque, risus
              vitae porta iaculis, metus tortor cursus felis, at porta odio lorem nonsa mauris. Nullam mattis nulla blandit sapien cursus, quis luctus ex volutpat. Vestibulum santa dui nulla, sed feugiat felis hendrerit euro. Praesent in lobortis
              orci, vitae finibus tortor. Aliquam nisl sapien, posuere ac accumsan scelerisque, eleifend quis dui, quisque cursus congue nibh pretium blandit.</p>
            `,
			},
		],
	},
};

export const footerLinks = {
	contactText: 'Etiam sutor risus, dapibus act elefend katen, lacinia sitamet denim. Mauris sagittis kansa interdum dignissim.',
	openingHours: [
		{
			day: 'Monday',
			hours: '8:00-6:00',
		},
		{
			day: 'Tuesday',
			hours: '8:00-6:00',
		},
		{
			day: 'Wednesday',
			hours: '8:00-6:00',
		},
		{
			day: 'Thursday',
			hours: '8:00-5:00',
		},
		{
			day: 'Friday',
			hours: '8:00-5:00',
		},
		{
			day: 'Saturday',
			hours: '8:00-4:00',
		},
		{
			day: 'Sunday',
			hours: 'closed',
		},
	],
	quickLinks: [
		{
			id: 'about',
			title: 'About',
		},
		{
			id: 'faq',
			title: 'FAQ',
		},
		{
			id: 'contact',
			title: 'Contact',
		},
		{
			id: 'policy',
			title: 'Policy',
		},
		{
			id: 'blog',
			title: 'Blog',
		},
		{
			id: 'advisors',
			title: 'Advisors',
		},
		{
			id: 'careers',
			title: 'Careers',
		},
		{
			id: 'dentists',
			title: 'Dentists',
		},
		{
			id: 'services',
			title: 'Services',
		},
		{
			id: 'legal',
			title: 'Legal',
		},
	],
};
