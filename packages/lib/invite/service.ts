import "server-only";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { cache as reactCache } from "react";
import { prisma } from "@cowk8s/database";
import { ZOptionalNumber, ZString } from "@cowk8s/types/common";

import {
  TInvite,
  TInviteUpdateInput,
  TInvitee,
  ZInviteUpdateInput,
  ZInvitee,
} from "@cowk8s/types/invites";

export const getInvitesByOrganizationId = reactCache(
  (organizationId: string, page?: number): Promise<TInvite[]> => {

  }
)