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
						id: 'services/general',
						title: 'General',
					},
					{
						id: 'services/cosmetic',
						title: 'Cosmetic',
					},
					{
						id: 'services/surgical',
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
						id: 'dentists',
						title: 'Meet the Team',
					},
					{
						id: 'dentists/bobby-clarke',
						title: 'Bobby Clark',
					},
					{
						id: 'dentists/wayne-gretzky',
						title: 'Wayne Gretzky',
					},
					{
						id: 'dentists/bobbi-hull',
						title: 'Bobbi Hull',
					},
				],
			},
			{
				id: 'dental-technology',
				title: 'Dental Technology',
			},
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
		},
		{
			icon: 'icon_heart_alt',
			value: '700+',
			text: 'Happy Patients',
		},
		{
			icon: 'icon_book_alt',
			value: 120,
			text: 'Certificates',
		},
		{
			icon: 'icon_id',
			value: '40+',
			text: 'Dentists',
		},
	],
};

export const services = {
	general: [
		{
			id: 0,
			service: 'Cleaning and Exams',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Routine care for all',
			description: 'We make getting your teeth cleaned at Dentos convenient and, dare we say, a relief to those with dental anxiety. Visit us every 6 months for a 60-minute visit that includes:',
			inclusions: ['Gentle and thorough dental cleaning with your hygienist', '3D x-rays (once a year)', 'Dental exam with your dentist', 'Free take home teeth whitening'],
			// dentist: ['Wayne Gretzky'] probably grab from dentist array and expertise
		},
		{
			id: 1,
			service: 'Emergency Care',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Feel better now',
			description: 'Looking for an emergency dentist? Dentos offers same-day emergency dental care for current and new patients alike. We help with:',
			inclusions: ['Toothaches', 'Broken or chipped teeth', 'Broken crowns and fillings', 'Abscesses or swelling', 'Knocked-out teeth', 'Anything that doesn’t feel right in your mouth!'],
		},
		{
			id: 3,
			service: 'Crowns',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Treated like royalty with our quality crowns',
			description: 'A ceramic dental crown protects weak, damaged teeth so they can continue functioning (and shining brightly) for years to come. There are a few situations where our dentists might recommend a dental crown:',
			inclusions: ['Restore badly worn teeth', 'Broken teeth', 'Repair a large cavity', 'Restore your tooth after a root canal', 'The final step of an implant'],
		},
		{
			id: 4,
			service: 'Family Dentistry',
			image: '../src/assets/bg-img/15.jpg',
			header: 'We put loved ones first',
			description: 'Any kind of medical treatment for your loved ones can feel stressful. That’s why our family dental group at Village Dental makes our patients’ comfort, convenience, and ease our top priority. Best of all, we can treat the entire family at one appointment — say goodbye to multiple trips to the dentist just to get the whole family’s teeth cleaned!',
			inclusions: ['General Dentistry – preventative care, tooth repair, emergency care', 'Cosmetic Dentistry – Invisalign, teeth whitening, veneers', 'Surgical Dentistry – extractions, root canals, implants, bone grafts'],
		},
	],
	cosmetic: [
		{
			id: 1,
			service: 'Invisalign',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Straighten Up',
			description: 'Invisalign is an easy and efficient way for adults and teens alike to straighten their teeth. ',
			inclusions: ['Invisalign uses clear acrylic aligners that are discreet and comfortable.', 'Wear your retainers for 23 hours a day, pop them out while eating and brushing.', 'Invisalign straightens misaligned teeth without unsightly, sharp metal braces.', 'Most treatments take 6 months to 2 years depending on the complexity of the case.'],
		},
		{
			id: 2,
			service: 'Vaneers',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Level Up',
			description: 'Improve the appearance of your teeth and smile with veneers. Usually made of porcelain or resin, veneers are thin, custom-made shells that fit around your teeth. This treatment completely transforms the shape, color, length, or size of your teeth.',
			inclusions: ['Corrects gaps, chips, stains, and worn teeth.', 'Also effective for improving just one tooth.', 'Natural-looking and customized for a flawless smile.', 'quick fix orthodontic treatment.'],
		},
		{
			id: 3,
			service: 'Teeth Whitening',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Get your own bling bling smile',
			description: 'Goodbye, yellow teeth. Age, tobacco, tea, coffee, wine, and soda can wreak havoc on your teeth’s naturally white color. Unfortunately, stained teeth can make you look and feel older and less confident. We offer powerful professional teeth whitening treatments to help you shine your brightest.',
			inclusions: ['Remove surface stains from your teeth', 'Brighten your smile without causing sensitivity', 'Create a natural, confident smile'],
		},
	],
	surgical: [
		{
			id: 1,
			service: 'Implants',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Fake it till you make it',
			description: 'We make the dental implant process the easiest experience possible. You’ll be grinning, speaking, and chewing happily in no time.  A smile that lasts.',
			inclusions: ['In person consultation', '3D imaging to ensure proper placement', 'Placement - The implant is placed in one simple, comfortable visit'],
		},
		{
			id: 2,
			service: 'Root Canals',
			image: '../src/assets/bg-img/15.jpg',
			header: 'Down to the roots',
			description: 'We make the dental implant process the easiest experience possible. You’ll be grinning, speaking, and chewing happily in no time.  A smile that lasts.',
			inclusions: ['3D Imaging & Diagnosis', 'Remove the Infection', 'Restore the Tooth'],
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
		image: '../src/assets/bg-img/9.png',
		expertise: 'Surgical Expert',
	},
	{
		id: 2,
		name: 'Wayne Gretzky',
		image: '../src/assets/bg-img/10.png',
		expertise: 'Great One',
	},
	{
		id: 3,
		name: 'Bobbi Hull',
		image: '../src/assets/bg-img/11.png',
		expertise: 'Pediatric & Family Expert',
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
