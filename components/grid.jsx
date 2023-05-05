import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/constants';
import { getUrlPath } from '../lib/getUrlPath';
import { withGrid } from '@pantheon-systems/nextjs-kit';

const GradientPlaceholder = () => (
	<div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-500" />
);

const GridItem = ({ href, imgSrc, altText, title }) => {
	return (
		<Link passHref href={href}>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imgSrc !== null ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							alt={altText}
							style={{ objectFit: "cover" }}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{title} &rarr;
				</h2>
			</div>
		</Link>
	);
};

const PostGridItem = ({ content: post }) => {
	const imgSrc = getUrlPath(post?.featuredImage?.node?.sourceUrl);
	const altText = post?.featuredImage?.node.altText || post.title;

	return (
		<GridItem
			href={`/posts${post.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={post.title}
		/>
	);
};

const PageGridItem = ({ content: page }) => {
	const imgSrc = getUrlPath(page?.featuredImage?.node?.sourceUrl);
	const altText = page?.featuredImage?.node.altText || page.title;

	return (
		<GridItem
			href={`/pages${page.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={page.title}
		/>
	);
};

export const PostGrid = withGrid(PostGridItem);
export const PageGrid = withGrid(PageGridItem);
