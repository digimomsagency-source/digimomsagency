export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  date: string;
  rating: number;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Founder",
    company: "Apex Tech Labs, Mumbai",
    text: "Outstanding service! DigiMoms created a highly optimized, blazing fast web presence for our startup. Their level of professionalism and prompt communication is unmatched in 2026.",
    date: "July 12, 2026",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Iyer",
    role: "Director",
    company: "Iyer & Sons Organic, Bengaluru",
    text: "The e-commerce experience DigiMoms built has doubled our daily sales in Karnataka. Extremely professional team and absolute luxury execution.",
    date: "July 08, 2026",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Rathore",
    role: "Managing Director",
    company: "Rathore Luxury Stays, Jaipur",
    text: "Our resort's booking conversion went up by 45% after launching the new website. The hover-scroll preview effect they designed is highly engaging!",
    date: "July 02, 2026",
    rating: 5
  },
  {
    id: 4,
    name: "Pooja Banerjee",
    role: "Chief Pediatrician",
    company: "Care Kids Clinic, Kolkata",
    text: "They built a beautiful patient scheduling system for my clinic. Patients keep praising how modern and easy-to-use our new website is. Highly recommended!",
    date: "June 28, 2026",
    rating: 5
  },
  {
    id: 5,
    name: "Rohan Dasgupta",
    role: "CEO",
    company: "Dasgupta Logistics, Sabang",
    text: "Incredible development speed and pixel-perfect design. We wanted to represent our roots in Paschim Medinipur with a world-class standard, and DigiMoms delivered exactly that.",
    date: "June 22, 2026",
    rating: 5
  },
  {
    id: 6,
    name: "Sneha Reddy",
    role: "Co-Founder",
    company: "GreenVibe Fitness, Hyderabad",
    text: "The membership portal DigiMoms developed is robust and visually spectacular. It has streamlined our gym operations and increased member retention.",
    date: "June 19, 2026",
    rating: 5
  },
  {
    id: 7,
    name: "Karan Johar",
    role: "Creative Lead",
    company: "Karan Designs, Pune",
    text: "Elegant glassmorphism styling, clean animations, and flawless responsiveness. Their UI/UX team understands luxury brand identity perfectly.",
    date: "June 15, 2026",
    rating: 5
  },
  {
    id: 8,
    name: "Meera Nair",
    role: "Principal",
    company: "Vidya Academy, Kochi",
    text: "Our school's admissions portal designed by DigiMoms is clean and professional. The WhatsApp integration for instant parent support is brilliant.",
    date: "June 11, 2026",
    rating: 5
  },
  {
    id: 9,
    name: "Aditya Verma",
    role: "Founder",
    company: "Verma Realty Group, Noida",
    text: "DigiMoms designed an interactive virtual tour website for our high-end luxury penthouses. Their Royal Blue and Gold theme aligns with our brand flawlessly.",
    date: "June 05, 2026",
    rating: 5
  },
  {
    id: 10,
    name: "Sanjana Sen",
    role: "Owner",
    company: "The Saffron Kitchen, Paschim Medinipur",
    text: "Best decision we made for our fine dining restaurant. The online ordering is seamless and has eliminated order mistakes entirely. 5 stars!",
    date: "May 29, 2026",
    rating: 5
  },
  {
    id: 11,
    name: "Rahul Krishnan",
    role: "Operations Head",
    company: "Krishnan & Co, Chennai",
    text: "Remarkable execution on the Business Plan. Our website was delivered on time with a fully functional admin section and domain setup.",
    date: "May 24, 2026",
    rating: 5
  },
  {
    id: 12,
    name: "Neha Gokhale",
    role: "Co-Founder",
    company: "Gokhale Wellness, Pune",
    text: "DigiMoms sets the absolute standard for website development. Their attention to minor layout and speed details is remarkable.",
    date: "May 18, 2026",
    rating: 5
  },
  {
    id: 13,
    name: "Manish Tripathi",
    role: "Managing Partner",
    company: "Tripathi Law Firm, Delhi",
    text: "High-end corporate look, smooth parallax feel, and solid performance. Highly professional delivery that speaks volumes of Tanmoy Jana's vision.",
    date: "May 12, 2026",
    rating: 5
  },
  {
    id: 14,
    name: "Divya Kapoor",
    role: "Founder",
    company: "Kapoor Couture, Chandigarh",
    text: "Our boutique's online store looks like a international luxury brand. The gold gradient highlights are sophisticated and beautifully implemented.",
    date: "May 06, 2026",
    rating: 5
  },
  {
    id: 15,
    name: "Kunal Deshmukh",
    role: "Director",
    company: "Deshmukh AgriTech, Nagpur",
    text: "Excellent project delivery! Highly reliable customer support and flawless execution of our complex custom pages.",
    date: "April 29, 2026",
    rating: 5
  },
  {
    id: 16,
    name: "Shreya Ghoshal",
    role: "Administrator",
    company: "Aura Dental Clinic, Kolkata",
    text: "Patients love booking their sessions directly through our web interface. DigiMoms has helped modernize our clinic's digital presence immensely.",
    date: "April 22, 2026",
    rating: 5
  },
  {
    id: 17,
    name: "Abhishek Roy",
    role: "Founder",
    company: "Roy Academy, Kharagpur",
    text: "The student registration and course showcase is highly engaging. Parents can quickly connect with us on WhatsApp with a single tap.",
    date: "April 18, 2026",
    rating: 5
  },
  {
    id: 18,
    name: "Ishita Bose",
    role: "General Manager",
    company: "The Grand Palace, Siliguri",
    text: "Luxurious design, gorgeous micro-animations, and pristine layout. Our premium luxury hotel website perfectly stands out in the tourism market.",
    date: "April 11, 2026",
    rating: 5
  },
  {
    id: 19,
    name: "Siddharth Jain",
    role: "Founder",
    company: "Jain FinTech, Ahmedabad",
    text: "Superb experience working with DigiMoms. They delivered a high-end single page web application optimized for conversion.",
    date: "April 05, 2026",
    rating: 5
  },
  {
    id: 20,
    name: "Priyanka Patel",
    role: "Director",
    company: "Patel Pharma, Surat",
    text: "Our web interface looks brilliant on all devices. DigiMoms' mobile-first development approach is exactly what our B2B clients needed.",
    date: "March 29, 2026",
    rating: 5
  },
  {
    id: 21,
    name: "Arjun Singhal",
    role: "Co-Founder",
    company: "Singhal Metal Corp, Gurgaon",
    text: "Pure corporate luxury. No cheap templates used. They designed every section from scratch to represent our heritage in metal manufacturing.",
    date: "March 23, 2026",
    rating: 5
  },
  {
    id: 22,
    name: "Kriti Sharma",
    role: "Head of Marketing",
    company: "Luxe Decor, Hyderabad",
    text: "Our interior design portfolio has received countless compliments. The image scroll effects are so immersive and artistic.",
    date: "March 17, 2026",
    rating: 5
  },
  {
    id: 23,
    name: "Harish Pillai",
    role: "Founder",
    company: "Pillai Ayurvedic Care, Trivandrum",
    text: "The digital catalog DigiMoms created is beautiful. We've seen an immediate boost in direct inquiries from other states.",
    date: "March 11, 2026",
    rating: 5
  },
  {
    id: 24,
    name: "Tripti Sen",
    role: "Manager",
    company: "Bright Stars Pre-School, Medinipur",
    text: "A delightful experience. DigiMoms delivered a beautiful, modern portal for our institution with complete transparency.",
    date: "March 05, 2026",
    rating: 5
  },
  {
    id: 25,
    name: "Pranav Goel",
    role: "CEO",
    company: "Goel Logistics, Delhi",
    text: "Very professional communication, robust code architecture, and modern royal design feel. Completely satisfied with the Premium plan.",
    date: "February 27, 2026",
    rating: 5
  },
  {
    id: 26,
    name: "Nandini Gupta",
    role: "Creative Director",
    company: "Nandini Jewels, Jaipur",
    text: "They built a breathtaking luxury catalog for our handcrafted gold jewelry. The subtle animation elements fit our elite aesthetic perfectly.",
    date: "February 21, 2026",
    rating: 5
  },
  {
    id: 27,
    name: "Aman Malhotra",
    role: "Owner",
    company: "Malhotra Fitness, Chandigarh",
    text: "Outstanding gym website. Members love the interactive service cards. Booking a personal training slot is now effortless via WhatsApp.",
    date: "February 15, 2026",
    rating: 5
  },
  {
    id: 28,
    name: "Payal Chakraborty",
    role: "Founder",
    company: "Payal's Spa & Salon, Kolkata",
    text: "Highly recommended for local businesses. Booking inquiries have sky-rocketed by 60% since going online with DigiMoms.",
    date: "February 09, 2026",
    rating: 5
  },
  {
    id: 29,
    name: "Sameer Joshi",
    role: "Partner",
    company: "Joshi Consulting, Mumbai",
    text: "Flawless glassmorphism layout, solid responsive performance, and elite styling. DigiMoms is truly the best web agency in India.",
    date: "February 02, 2026",
    rating: 5
  },
  {
    id: 30,
    name: "Anjali Saxena",
    role: "Founder",
    company: "Saxena Edutech, Lucknow",
    text: "Excellent course structure page and quick WhatsApp direct links. Our students have found the user experience extremely intuitive.",
    date: "January 27, 2026",
    rating: 5
  },
  {
    id: 31,
    name: "Kabir Bhatia",
    role: "Director",
    company: "Bhatia Estates, Gurgaon",
    text: "Real estate needs professional, high-end design to close deals. The luxury feel of the royal blue and gold theme built by DigiMoms did exactly that.",
    date: "January 20, 2026",
    rating: 5
  },
  {
    id: 32,
    name: "Ridhi Sethi",
    role: "Owner",
    company: "Sethi Bakeries, Dehradun",
    text: "A beautiful local restaurant menu website. The images scroll on hover beautifully! The ordering has never been easier.",
    date: "January 14, 2026",
    rating: 5
  },
  {
    id: 33,
    name: "Vinay Kumar",
    role: "Founder",
    company: "Kumar Gym Hub, Sabang",
    text: "Fantastic service! From the initial consultation to final deployment, Tanmoy and his team was fully committed to our success in Paschim Medinipur.",
    date: "January 08, 2026",
    rating: 5
  },
  {
    id: 34,
    name: "Richa Chhabra",
    role: "Co-Founder",
    company: "Chhabra Prints, Ludhiana",
    text: "Our apparel line got a premium upgrade with this web launch. Seamless responsiveness on all devices and rich styling.",
    date: "January 03, 2026",
    rating: 5
  },
  {
    id: 35,
    name: "Gaurav Pandey",
    role: "Director",
    company: "Pandey Properties, Varanasi",
    text: "Extremely professional land catalog website. The custom plan WhatsApp automation helps us track customer requests instantly.",
    date: "December 28, 2025",
    rating: 5
  },
  {
    id: 36,
    name: "Shweta Tiwari",
    role: "Founder",
    company: "Tiwari Academy, Indore",
    text: "Beautifully organized website. Having our school digitalized by DigiMoms made online fee collection and support seamless.",
    date: "December 22, 2025",
    rating: 5
  },
  {
    id: 37,
    name: "Uday Reddy",
    role: "Director",
    company: "Reddy Infrastructure, Visakhapatnam",
    text: "Stunning corporate layout. The portfolio pages load instantly. A highly professional group that delivers on promises.",
    date: "December 16, 2025",
    rating: 5
  },
  {
    id: 38,
    name: "Kavita Rao",
    role: "Chief Dental Surgeon",
    company: "Pearl Dental Clinic, Hyderabad",
    text: "Excellent patient communication portal. The responsive menu and gold accent lines give an incredibly elite vibe.",
    date: "December 10, 2025",
    rating: 5
  },
  {
    id: 39,
    name: "Prateek Shah",
    role: "Founder",
    company: "Shah Trading Co., Baroda",
    text: "The 1-year support agreement with the Premium plan gives me total peace of mind. DigiMoms is our digital partner of choice.",
    date: "December 04, 2025",
    rating: 5
  },
  {
    id: 40,
    name: "Madhavan Swamy",
    role: "Principal Advisor",
    company: "Swamy Legal, Coimbatore",
    text: "Sophisticated and secure website layout. Matches the elite standards our corporate clients expect from us.",
    date: "November 28, 2025",
    rating: 5
  },
  {
    id: 41,
    name: "Deepika Sen",
    role: "Director",
    company: "Sen Medi-Care, Sabang",
    text: "An absolute asset to our healthcare center. Our digital appointment portal has dramatically reduced lobby wait times.",
    date: "November 22, 2025",
    rating: 5
  },
  {
    id: 42,
    name: "Varun Dhawan",
    role: "Founder",
    company: "Dhawan Fitness Gym, Jalandhar",
    text: "Very sleek, highly attractive UI! The WhatsApp redirection is extremely smooth and converts leads directly on our phone.",
    date: "November 16, 2025",
    rating: 5
  },
  {
    id: 43,
    name: "Tanvi Saxena",
    role: "Creative Partner",
    company: "The Loom Art, Ahmedabad",
    text: "Our boutique's digital collection looks like a masterpiece. The glassmorphism card layouts fit our design language flawlessly.",
    date: "November 10, 2025",
    rating: 5
  },
  {
    id: 44,
    name: "Jaspreet Singh",
    role: "Managing Director",
    company: "Singh Hospitality, Amritsar",
    text: "Phenomenal layout speed and luxurious imagery integration. Highly recommended for any resort or hotel looking to scale bookings.",
    date: "November 04, 2025",
    rating: 5
  },
  {
    id: 45,
    name: "Alok Mukherjee",
    role: "Senior Partner",
    company: "Mukherjee & Co, Midinipur",
    text: "I was highly skeptical of digital agencies, but Tanmoy Jana's team exceeded expectations with a secure, elite website.",
    date: "October 29, 2025",
    rating: 5
  },
  {
    id: 46,
    name: "Ritu Singhania",
    role: "Founder",
    company: "Singhania Educational Trust, Raipur",
    text: "The admissions inquiries for our schools have doubled. Having a premium web footprint has elevated our academic reputation.",
    date: "October 23, 2025",
    rating: 5
  },
  {
    id: 47,
    name: "Aditya Hegde",
    role: "Managing Partner",
    company: "Hegde Developers, Mangalore",
    text: "A truly responsive, gorgeous corporate real estate showcase. The dynamic pricing tables are easy to read and compare.",
    date: "October 17, 2025",
    rating: 5
  },
  {
    id: 48,
    name: "Sharmila Tagore",
    role: "Owner",
    company: "Tagore Fine Dining, Paschim Medinipur",
    text: "DigiMoms designed an incredibly appetizing restaurant web page with WhatsApp reservation alerts. Outstanding job!",
    date: "October 11, 2025",
    rating: 5
  },
  {
    id: 49,
    name: "Nikhil Chawla",
    role: "CEO",
    company: "Chawla Auto Parts, Ludhiana",
    text: "Fast, reliable, secure, and clean. The code architecture is perfect. Truly a world-class development standard from a Medinipur-born agency.",
    date: "October 05, 2025",
    rating: 5
  },
  {
    id: 50,
    name: "Gita Balakrishnan",
    role: "Director",
    company: "Gita's Academy, Chennai",
    text: "The web portal DigiMoms created has made connecting with prospective students extremely simple and fast. Absolutely superb work!",
    date: "September 29, 2025",
    rating: 5
  }
];
