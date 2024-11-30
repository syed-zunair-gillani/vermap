import { gql } from "@apollo/client";

export const QFHotel = gql`
query QHotel {
  hotels {
    nodes {
      uri
      title
      slug
      store {
        storeName
      }
      hotelFields {
        amenities {
          feature
        }
        contactInfo {
          email
          phone
        }
        imagesGallery {
          nodes {
            mediaItemUrl
          }
        }
        location
        roomAmenities {
          feature
          icon {
            node {
              mediaItemUrl
            }
          }
        }
        roomImages(last: 20) {
          nodes {
            mediaItemUrl
          }
        }
        roomPackages {
          packageName
          includedServices {
            serviceName
          }
        }
        roomPolicies {
          icon {
            node {
              mediaItemUrl
            }
          }
          policy
        }
        roomTypes {
          beds
          description
          fieldGroupName
          pricePerNight
          roomSize
          seasonalPriceHighSeason
          seasonalPriceLowSeason
          totalGuests
          type
        }
        website
      }
      hotelId
      content
      authorId
      date
      excerpt
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
`;