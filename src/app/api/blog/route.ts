import { gql } from "graphql-request";
import { getClient } from "@/lib/graphQLClient";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const client = getClient();

    const { first } = (await request.json()) as { first: number };
   

    const host = process.env.HASHNODE_PUBLICATION_HOST;
    if (!host) {
      return NextResponse.json(
        { error: "HASHNODE_PUBLICATION_HOST environment variable is not set" },
        { status: 500 }
      );
    }

    // Define the query with variable declarations
    const query = gql`
      query post($host: String!, $first: Int!) {
        publication(host: $host) {
          title
          posts(first: $first) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                title
                subtitle
                brief
                slug
                url
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `;

    // Pass variables to the query
    const data = await client.request(query, {
      host,
      first,
    });

    console.log("Data: ", data);

    if (!data) {
      return NextResponse.json(
        { error: "No data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Hashnode", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Hashnode" },
      { status: 500 }
    );
  }
}
