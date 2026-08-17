module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = var.cluster_name
  kubernetes_version = var.kubernetes_version

  vpc_id     = aws_vpc.main.id
  subnet_ids = aws_subnet.private[*].id

  endpoint_public_access  = true
  endpoint_private_access = true

  enable_irsa = true

  addons = {
    coredns = {
      most_recent = true
    }

    kube-proxy = {
      most_recent = true
    }

    vpc-cni = {
      most_recent = true
    }

    eks-pod-identity-agent = {
      most_recent = true
    }
  }

  eks_managed_node_groups = {
    main = {
      name = "mayouebeauty509-main"

      instance_types = var.node_instance_types

      min_size     = var.node_min_size
      max_size     = var.node_max_size
      desired_size = var.node_desired_size

      subnet_ids = aws_subnet.private[*].id

      capacity_type = "ON_DEMAND"

      disk_size = 30

      labels = {
        Environment = var.environment
        Project     = "MayoueBeauty509"
      }
    }
  }

  tags = {
    Name = var.cluster_name
  }
}
