# Shopify Storefront

Build a Headless Front-end Website using Next.js that connects to and leverages Shopify's Backend.

https://vercel.com/guides/building-ecommerce-sites-with-next-js-and-shopify

https://community.shopify.com/c/technical-q-a/headless-reac-js-and-next-js-web-store-that-connects-to/td-p/807770

https://www.pipiads.com/blog/next-js-shopify-storefront-api/

https://vercel.com/guides/building-ecommerce-sites-with-next-js-and-shopify


[The Theme we are following is](https://themes.shopify.com/themes/showcase/styles/betty/preview)


## Animation Details for classes by ab/basit 

1-->  If you want to fade from down to up when come in view you can use these classes in element

```terminal
className="fade_down_to_up fade_down_to_up_notView"
```
2-->  If you want to scale up to down for images not only images you can apply on all elements when come in view you can use these classes in element

```terminal
className="scale_up_to_down_image scale_up_to_down_image_notView"
```
3-->  If you want to show content after some milisec when come in view you can use these classes in element
Note: This is required to apply on every section except Navbar and footer

```terminal
className="content_fading_animate content_fading_animate_notView"
```